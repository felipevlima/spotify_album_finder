import React, { useState } from 'react';
import Search from 'src/components/search/search';
import Row from './components/Row/row';
import { Container } from './home.styles';
import { AlbumType } from './home.types';

const Home = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleGetApi = async data => {
    setAlbums(data);
  };

  return (
    <Container>
      <h1>Busque por seus albums preferidos</h1>
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
            <Row album={album} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
