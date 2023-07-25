export type Artist = {
  name: string;
  imageUrl: string;
  type: 'Artist';
};

export type Playlist = {
  name: string;
  imageUrl: string;
  user: string;
  type: 'Playlist';
};

export type Song = {
  title: string;
  artist: string;
  imageUrl: string;
};
