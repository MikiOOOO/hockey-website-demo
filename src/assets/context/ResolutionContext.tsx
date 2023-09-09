import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Device } from '../../types/device';
import { calculateCurrentDevice } from '../functions/functions';

// Create a context
const ResolutionContext = createContext<{
  device: Device | null;
  windowWidth: number | null;
}>({
  device: null,
  windowWidth: null,
});

// Custom hook to use the context
export const useResolutionContext = () => {
  return useContext(ResolutionContext);
};

// Context provider component
export function ResolutionProvider({ children }:{children: ReactNode}) {
  const [device, setDevice] = useState<Device>(calculateCurrentDevice(window.innerWidth));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      const currentWindowWidth = window.innerWidth;
      setDevice(calculateCurrentDevice(currentWindowWidth));
      setWindowWidth(currentWindowWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const contextValue = {
    device,
    windowWidth,
  };

  return (
    <ResolutionContext.Provider value={contextValue}>
      {children}
    </ResolutionContext.Provider>
  );
}
