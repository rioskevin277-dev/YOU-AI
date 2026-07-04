import { useState, useEffect } from 'react';

/**
 * useLiveClock — Returns a time string `HH:MM:SS.mmm` updated every 10ms.
 * The returned string updates every render cycle via setInterval(10).
 */
export function useLiveClock(): string {
  const [timeString, setTimeString] = useState('--:--:--.---');

  useEffect(() => {
    function format() {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, '0');
      const mm = d.getMinutes().toString().padStart(2, '0');
      const ss = d.getSeconds().toString().padStart(2, '0');
      const ms = d.getMilliseconds().toString().padStart(3, '0');
      return `${hh}:${mm}:${ss}.${ms}`;
    }

    setTimeString(format());

    const id = setInterval(() => {
      setTimeString(format());
    }, 10);

    return () => clearInterval(id);
  }, []);

  return timeString;
}
