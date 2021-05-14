import React from 'react';
import Play from '../../../../assets/icons/play.png';

const Row = ({ track }) => {
  const msToTime = duration => {
    let seconds: string | number = Math.floor((duration / 1000) % 60);
    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  };

  return (
    <tr>
      <td data-th="Nome">{track.name}</td>
      <td data-th="Artistas">{track.artists.map(artist => artist.name).join(', ')}</td>
      <td data-th="Duração">{msToTime(track.duration_ms)}</td>
      <td data-th="Ouvir">
        <a href={track?.external_urls?.spotify} target="_blank" rel="noreferrer">
          <img src={Play} alt="" />
        </a>
      </td>
    </tr>
  );
};

export default Row;
