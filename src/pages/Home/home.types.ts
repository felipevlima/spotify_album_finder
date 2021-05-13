export interface AlbumType {
  name: string;
  artists: Array<{ name: string }>;
  total_tracks: string;
  images: Array<{ url: string }>;
}
