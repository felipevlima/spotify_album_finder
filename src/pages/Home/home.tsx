import React, { useState } from 'react';
import Search from 'src/components/search/search';
import { Container } from './home.styles';
import { AlbumType } from './home.types';

const Home = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleGetApi = async data => {
    setAlbums(data);
  };

  return (
    <Container>
      <Search responseData={handleGetApi} />
      <table>
        <thead>
          <tr>
            <th>Capa</th>
            <th>Album</th>
            <th>Artistas</th>
            <th>Total de Faixas</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
            <tr>
              <td>
                <img src={album.images[0].url} alt={album.name} />
              </td>
              <td>{album.name}</td>
              <td>{album.artists.map(artist => artist.name).join(', ')}</td>
              <td>{album.total_tracks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
