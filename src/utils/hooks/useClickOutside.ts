import { useEffect, RefObject } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement | SVGSVGElement>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [callback]);
};

export default useClickOutside;
