import { FC } from 'react';
import { Artist, Playlist } from '../@types';
import { cn } from '../lib/utils';
import { RxDotFilled } from 'react-icons/rx';

interface MediaItemProps {
  data: Artist | Playlist;
}

const MediaItem: FC<MediaItemProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md">
      <div className="relative rounded-md w-12 overflow-hidden">
        <img
          className={cn(
            data.type === 'Artist'
              ? 'rounded-full'
              : data.type === 'Playlist' && 'rounded-md'
          )}
          src={data.imageUrl}
          alt={data.name}
        />
      </div>
      <div>
        <h3 className="font-semibold text-white">{data.name}</h3>
        <div className="flex text-[#A7A7A7] items-center">
          <p>{data.type}</p>
          {data.type === 'Playlist' ? <RxDotFilled /> : null}
          {data.type === 'Playlist' ? <p>{data.user}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
