import { FC } from 'react';
import { FaPlay } from "react-icons/fa"

interface ListItemProps {
  image: string;
  name: string;
}

const ListItem: FC<ListItemProps> = ({ image, name }) => {
  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 cursor-pointer hover:bg-neutral-100/20 transition">
      <div className="relative w-20">
        <img src={image} alt={name} className="w-full" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
