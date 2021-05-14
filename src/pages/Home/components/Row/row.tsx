import React from 'react';
import { useHistory } from 'react-router-dom';

const Row = ({ album }) => {
  const history = useHistory();

  const handleGoToInfo = () => {
    history.push(`/${album.id}`);
  };
  return (
    <tr onClick={handleGoToInfo}>
      <td data-th="Capa">
        <img src={album.images[0].url} alt={album.name} />
      </td>
      <td data-th="Album">{album.name}</td>
      <td data-th="Artistas">{album.artists.map(artist => artist.name).join(', ')}</td>
      <td data-th="Total de Faixas">{album.total_tracks}</td>
    </tr>
  );
};

export default Row;
