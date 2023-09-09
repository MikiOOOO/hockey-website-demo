import { getElementWidth } from '../../assets/functions/functions';
import { useResolutionContext } from '../../assets/context/ResolutionContext';
import React, { useEffect, useMemo, useState } from 'react';

interface UseCarouselCalculatorProps<T extends HTMLElement> {
  itemRef: React.RefObject<T>;
  items: string[] | null;
}

export const useCarouselCalculator = <T extends HTMLElement>({ itemRef, items }: UseCarouselCalculatorProps<T>) => {
  const [multiplier, setMultiplier] = useState(0);
  const { windowWidth } = useResolutionContext(); // You should define useResolutionContext somewhere in your code.
  console.log(itemRef, items, windowWidth);
  const itemWidth = getElementWidth(itemRef); // You need to define getElementWidth.
  const itemsPerPage = useMemo(() => {
    if (windowWidth && itemRef.current) {
      console.log('itemwidth: ', itemWidth);
      const itemsAmount = windowWidth / itemWidth;
      return {
        itemsPerPage: Math.ceil(itemsAmount),
        itemPart: Math.ceil(itemsAmount) - itemsAmount,
      };
    }

    return {
      itemsPerPage: 1,
      itemPart: 0,
    }
  }, [itemWidth, itemRef, windowWidth]);

  useEffect(() => {
    setMultiplier(0);
  }, [windowWidth])

  console.log(itemsPerPage);

  const handleLeftSwitch = () => {
    if (multiplier) {
      if (Math.abs(multiplier) >= 1) {
        setMultiplier((prev) => prev + 1);
      } else {
        setMultiplier((prev) => prev + Math.abs(multiplier));
      }
    }
  };

  const handleRightSwitch = () => {
    const currentItemsPerPage = Number(itemsPerPage?.itemsPerPage);
    const extendingPart = Number(itemsPerPage?.itemPart);
    if (items && Math.abs(multiplier) < items.length - currentItemsPerPage) {
      setMultiplier((prev) => prev - 1);
    } else {
      const maxRange = items
        ? items?.length - currentItemsPerPage + extendingPart
        : 0;
      console.log(maxRange);

      if (Math.abs(multiplier) < maxRange) {
        console.log(multiplier);
        setMultiplier((prev) => prev - extendingPart);
      }
    }
  };

  return {
    handleLeftSwitch,
    handleRightSwitch,
    multiplier,
  };
};

interface useTouchEventsProps {
  onLeftSwitch: () => void;
  onRightSwitch: () => void;
};

export const useTouchEvents = ({onLeftSwitch, onRightSwitch}: useTouchEventsProps) => {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      const deltaX = endX - startX;
      if (deltaX > 50) {
        onLeftSwitch();

      } else if (deltaX < -50) {
        onRightSwitch();
      }
    }

    setStartX(0);
    setEndX(0);
  };

  return {
    handleTouchEnd, 
    handleTouchStart,
    handleTouchMove,
  }
}
interface useMouseEventsProps extends useTouchEventsProps {

}

export const useMouseEvents = ({onLeftSwitch, onRightSwitch}: useMouseEventsProps) => {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (startX && endX) {
      const deltaX = endX - startX;
      if (deltaX > 5) {
        onLeftSwitch();

      } else if (deltaX < -5) {
        onRightSwitch();
      }
    }

    setStartX(0);
    setEndX(0);
  };

  return {
    handleMouseDown, 
    handleMouseMove,
    handleMouseUp,
  }
}