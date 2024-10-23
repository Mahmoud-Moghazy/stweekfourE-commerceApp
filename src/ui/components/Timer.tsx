import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  // Timer state
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Timer logic
  useEffect(() => {
    // Set target time (for example, countdown from 5 days)
    const targetTime = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; 

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Clean up timer on component unmount
  }, []);

  return (
    <div className="timer">
      <div className="timer__inner flex gap-x-4 items-center">
        <div className="timer__days">
          <p className="font-medium text-xs md:block">
            <span className="block md:hidden">D</span>
            <span className="hidden md:block">Days</span>
          </p>
          <p className="font-bold lg:text-[32px]">{time.days.toString().padStart(2, "0")}</p>
        </div>

        {/* Colon separator */}
        <div className="flex flex-col gap-y-1 md:gap-y-2">
          <div className="size-1 bg-red-400 rounded-full" />
          <div className="size-1 bg-red-400 rounded-full" />
        </div>

        <div className="timer__hours">
          <p className="font-medium text-xs">
            <span className="block md:hidden">H</span>
            <span className="hidden md:block">Hours</span>
          </p>
          <p className="font-bold lg:text-[32px]">{time.hours.toString().padStart(2, "0")}</p>
        </div>

        {/* Colon separator */}
        <div className="flex flex-col gap-y-1 md:gap-y-2">
          <div className="size-1 bg-red-400 rounded-full" />
          <div className="size-1 bg-red-400 rounded-full" />
        </div>

        <div className="timer__minutes">
          <p className="font-medium text-xs">
            <span className="block md:hidden">M</span>
            <span className="hidden md:block">Minutes</span>
          </p>
          <p className="font-bold lg:text-[32px]">{time.minutes.toString().padStart(2, "0")}</p>
        </div>

        {/* Colon separator */}
        <div className="flex flex-col gap-y-1 md:gap-y-2">
          <div className="size-1 bg-red-400 rounded-full" />
          <div className="size-1 bg-red-400 rounded-full" />
        </div>

        <div className="timer__seconds">
          <p className="font-medium text-xs">
            <span className="block md:hidden">S</span>
            <span className="hidden md:block">Seconds</span>
          </p>
          <p className="font-bold lg:text-[32px]">{time.seconds.toString().padStart(2, "0")}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
