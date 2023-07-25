import { FC } from 'react';
import { Song } from '../@types';
import PlayButton from './PlayButton';

interface MediaCardProps {
  data: Song;
}

const MediaCard: FC<MediaCardProps> = ({ data }) => {
  return (
    <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
      <div className="relative aspect-square rounded-md w-52 overflow-hidden">
        <img src={data.imageUrl} alt={data.title} className="w-full" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.artist}</p>
      </div>
      <div className='absolute bottom-24 right-5'>
        <PlayButton />
      </div>
    </div>
  );
};

export default MediaCard;
