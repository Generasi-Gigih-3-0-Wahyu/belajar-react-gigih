import ListItem from '../components/ListItem';
import MediaCard from '../components/MediaCard';
import Navbar from '../components/Navbar';
import { mostPlayed, songs } from '../lib/dummyData';

function App() {
  return (
    <div className="max-h-full relative overflow-y-auto scrollbar-none rounded-lg text-white">
      <Navbar />
      <div className="bg-gradient-to-b from-emerald-800 px-5">
        <h2 className="font-semibold text-3xl">Good Morning</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-4">
          {mostPlayed.map((library) => (
            <ListItem
              key={library.name}
              image={library.imageUrl}
              name={library.name}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-3 space-y-4">
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-2xl">Songs for you</h2>
          <p className='text-neutral-400 cursor-pointer hover:text-white'>Show All</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
          {songs.map((song) => (
            <MediaCard key={song.title} data={song} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
