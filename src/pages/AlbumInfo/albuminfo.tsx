import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useLoginContext } from 'src/context/Login';
import api from 'src/service/api';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import ArrowLeft from '../../assets/icons/left-arrow.png';
import { AlbumInformationContent, Artist, Content, Name, ReleaseDate, SubInfos, Header, Tracks } from './albuminfo.styles';
import Row from './Components/Row/row';

interface ParamsTypes {
  id: string;
}

interface AlbumTypes {
  images: Array<{ url: string }>;
  name: string;
  artists: Array<{ name: string }>;
  release_date: string;
  tracks: {
    items: Array<{}>;
  };
}

const AlbumInfo = () => {
  const [albumsInfo, setAlbumsInfo] = useState<AlbumTypes>();

  const history = useHistory();
  const { id } = useParams<ParamsTypes>();
  const { login } = useLoginContext();

  const handleBackDashboard = () => {
    history.push('/');
  };

  const handleGetAlbumInfo = async (id: string) => {
    const response = await api.get('/albums', { params: { ids: id }, headers: { Authorization: `Bearer ${login.token}` } });
    setAlbumsInfo(response.data.albums[0]);
  };

  useEffect(() => {
    handleGetAlbumInfo(id);
  }, []);

  return (
    <>
      <Header>
        <button type="button" onClick={handleBackDashboard}>
          <img src={ArrowLeft} alt="Voltar" />
        </button>
      </Header>
      {albumsInfo && (
        <Content>
          <AlbumInformationContent>
            <img src={albumsInfo.images[0].url} alt="" />
            <div className="information">
              <Name>{albumsInfo.name}</Name>
              <Artist>{albumsInfo.artists.map(artist => artist.name).join(', ')}</Artist>
              <SubInfos>
                <ReleaseDate>{format(new Date(albumsInfo.release_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBr })}</ReleaseDate>
              </SubInfos>
            </div>
          </AlbumInformationContent>
          <Tracks>
            <h1>Tracks</h1>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Artistas</th>
                  <th>Duração</th>
                  <th>Ouvir</th>
                </tr>
              </thead>
              <tbody>
                {albumsInfo.tracks.items.map(track => (
                  <Row track={track} />
                ))}
              </tbody>
            </table>
          </Tracks>
        </Content>
      )}
    </>
  );
};

export default AlbumInfo;
