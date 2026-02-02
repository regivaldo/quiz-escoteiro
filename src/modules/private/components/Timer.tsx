import { TimerIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

interface TimerProps {
  startTime: string;
}

const Timer = ({ startTime }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<string>(startTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const [minutes, seconds] = prevTime.split(':').map(Number);
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            return '00:00';
          }
          return `${minutes - 1}:59`;
        }
        return `${minutes}:${String(seconds - 1).padStart(2, '0')}`;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-lg bg-surface-subtle p-2 shadow-sm">
      <TimerIcon size={24} className="text-primary text-xl" weight="fill" />
      <p className="text-lg font-bold tracking-tight text-text">{timeRemaining}</p>
    </div>
  );
};

export default Timer;
