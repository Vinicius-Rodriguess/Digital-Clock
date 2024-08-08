import { useEffect, useState } from "react";
import ClockItem from "./ClockItem";
import "./Clock.css";

const Clock = () => {
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  const formatDate = (date: number): string => date.toString().padStart(2, "0");

  useEffect(() => {
    const updateClock = setInterval(() => {
      const today = new Date();

      setHours(formatDate(today.getHours()));
      setMinutes(formatDate(today.getMinutes()));
      setSeconds(formatDate(today.getSeconds()));
    }, 1000);

    return () => clearInterval(updateClock);
  }, []);

  return (
    <div className="flex flex-col gap-2 p-1 Clock-cont-gen">
      <ClockItem title={"Horas"} date={hours} />
      <ClockItem title={"Minutos"} date={minutes} />
      <ClockItem title={"Segundos"} date={seconds} />
    </div>
  );
};

export default Clock;
