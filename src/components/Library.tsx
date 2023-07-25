import { FC } from 'react';
import { Artist, Playlist } from '../@types';
import { AiOutlinePlus } from 'react-icons/ai';
import MediaItem from './MediaItem';

interface LibraryProps {
  libraries: (Artist | Playlist)[];
}

const LibraryIcon = () => (
  <svg
    role="img"
    height="24"
    width="24"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-encore-id="icon"
    fill="#A7A7A7"
  >
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
  </svg>
);

const Library: FC<LibraryProps> = ({ libraries }) => {
  return (
    <div className="flex flex-col relative overflow-y-auto max-h-full">
      <div className="sticky flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <LibraryIcon />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3 pb-2 overflow-y-auto scrollbar-none">
        {libraries.map((item) => (
          <MediaItem key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Library;
