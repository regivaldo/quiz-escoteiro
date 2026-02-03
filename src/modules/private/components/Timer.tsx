import { TimerIcon } from '@phosphor-icons/react';
import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';

interface TimerProps {
  startTime: string;
  onTimeUp?: () => void;
  resetKey?: number; // Quando este valor mudar, o timer reseta
}

export interface TimerRef {
  getTimeRemaining: () => number; // Retorna o tempo restante em segundos
  getTotalTime: () => number; // Retorna o tempo total em segundos
}

const Timer = forwardRef<TimerRef, TimerProps>(({ startTime, onTimeUp, resetKey }, ref) => {
  const [timeRemaining, setTimeRemaining] = useState<string>(startTime);
  const hasCalledTimeUp = useRef(false);

  // Calcula o tempo total em segundos
  const getTotalTimeSeconds = () => {
    const [minutes, seconds] = startTime.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  // Expõe métodos para o componente pai
  useImperativeHandle(ref, () => ({
    getTimeRemaining: () => {
      const [minutes, seconds] = timeRemaining.split(':').map(Number);
      return minutes * 60 + seconds;
    },
    getTotalTime: getTotalTimeSeconds,
  }));

  // Reseta o timer quando resetKey mudar
  useEffect(() => {
    setTimeRemaining(startTime);
    hasCalledTimeUp.current = false;
  }, [resetKey, startTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const [minutes, seconds] = prevTime.split(':').map(Number);

        // Se já chegou a zero, não faz nada
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return '00:00';
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            return '00:00';
          }
          return `${minutes - 1}:59`;
        }

        // Verifica se vai chegar a zero no próximo tick
        const newSeconds = seconds - 1;
        if (minutes === 0 && newSeconds === 0) {
          clearInterval(timer);
          // Chama o callback apenas uma vez
          if (onTimeUp && !hasCalledTimeUp.current) {
            hasCalledTimeUp.current = true;
            setTimeout(() => onTimeUp(), 0);
          }
          return '00:00';
        }

        return `${minutes}:${String(newSeconds).padStart(2, '0')}`;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resetKey, onTimeUp]);

  // Determina a cor baseada no tempo restante
  const getTimerColor = () => {
    const [minutes, seconds] = timeRemaining.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds <= 10) return 'text-red-500';
    if (totalSeconds <= 30) return 'text-orange-500';
    return 'text-primary';
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-surface-subtle p-2 shadow-sm">
      <TimerIcon size={24} className={`${getTimerColor()} text-xl`} weight="fill" />
      <p className={`text-lg font-bold tracking-tight ${getTimerColor()}`}>{timeRemaining}</p>
    </div>
  );
});

Timer.displayName = 'Timer';

export default Timer;
