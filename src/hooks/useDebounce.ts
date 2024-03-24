import { useState, useEffect } from 'react';

// https://dev.to/mukhammadsobirov/kastomnyi-react-khuk-usedebounce-2b3l
export default function useDebounce(value: unknown, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  return debouncedValue;
}
