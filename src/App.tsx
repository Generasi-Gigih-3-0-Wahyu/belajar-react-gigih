import ProfileCard from "./components/ProfileCard";
import { datas } from "./lib/dummyData";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center space-y-4">
      {datas.map((item) => (
        <ProfileCard key={item.name} {...item} />
      ))}
    </div>
  );
}

export default App;
