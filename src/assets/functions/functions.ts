import { Device } from "../../types/device";

export function calculateCurrentDevice(currentWindowWidth: number): Device {
  if (currentWindowWidth <= 768) {
    return Device.MOBILE;
  }

  if (currentWindowWidth <= 1024) {
    return Device.TABLET;
  }

  return Device.DESKTOP;
}

export function getElementWidth<T extends HTMLElement>(ref: React.RefObject<T>): number {
  if (ref.current) {
    return ref.current.offsetWidth;
  }
  return 0; // Default value if the element isn't available
}

export function createUrlName(name: string):string {
  const nameLowered = name.toLowerCase();
  const nameParts = nameLowered.split(' ');

  return nameParts.length > 1 ? nameParts.join('-') : nameLowered;
};

export function getRemainingTime(eventDate: Date) {
  const eventDateinMiliseconds = eventDate.getTime();
  const now = new Date();
  const nowInMiliSeconds = now.getTime();
  let difference = eventDateinMiliseconds - nowInMiliSeconds;

  const second = 1000; //1000 ms
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (difference > day) {
    days = Math.floor(difference / day);
    difference = difference % day;
  };

  if (difference > hour) {
    hours = Math.floor(difference / hour);
    difference = difference % hour;
  }

  if (difference > minute) {
    minutes = Math.floor(difference / minute);
    difference = difference % minute;
  }

  if (difference > second) {
    seconds = Math.floor(difference / second);
    difference = difference % second;
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}