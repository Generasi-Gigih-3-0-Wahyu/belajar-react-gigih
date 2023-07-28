import { cn } from "@/lib/utils";
import { FC } from "react";

const Timer: FC<{ date: Date; value: string }> = ({ date, value }) => {
  const checkColor = (value: string) => {
    if (value === "lightcoral") {
      return "text-pink-400";
    } else if (value === "midnightblue") {
      return "text-blue-400";
    } else {
      return "text-black";
    }
  };
  return (
    <div className="flex items-center space-x-2 text-2xl">
      <p className={cn(checkColor(value))}>{date.toLocaleTimeString()}</p>
      {value === "lightcoral" && <span>❤️</span>}
    </div>
  );
};

export default Timer;
