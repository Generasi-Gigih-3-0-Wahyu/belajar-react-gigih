import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import { Combobox } from "./components/ui/Combobox";
import { datas } from "./lib/dummyData";
import Timer from "./components/Timer";

type ColorProps = {
  value: string;
  label: string;
};

function App() {
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  const colors: ColorProps[] = [
    {
      value: "lightcoral",
      label: "LightCoral",
    },
    {
      value: "midnightblue",
      label: "MidnightBlue",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center space-y-4">
      {datas.map((item) => (
        <ProfileCard key={item.id} {...item} />
      ))}
      <Combobox options={colors} value={value} setValue={setValue} />
      <Timer date={date} value={value} />
    </div>
  );
}

export default App;
