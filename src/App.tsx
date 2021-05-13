import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Routes from './routes/routes';
import GlobalStyles from './styles/global';
import { LoginContext, useLoginContext } from './context/Login';

interface TokenType {
  access_token: string;
}

const App = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [token, setToken] = useState('');
  const { setCurrentLogin } = useLoginContext();

  const handleGetToken = async () => {
    const response = await axios.post<TokenType>('https://accounts.spotify.com/api/token', '', {
      params: { grant_type: 'client_credentials' },
      headers: { Authorization: `Basic ${btoa(`${process.env.REACT_APP_CLIENTID}:${process.env.REACT_APP_CLIENTSECRET}`)}` },
    });
    setToken(response.data.access_token);
  };

  useEffect(() => {
    setIsFirstTime(false);

    if (isFirstTime === false) {
      handleGetToken();
    }
  }, [isFirstTime]);

  return (
    <LoginContext.Provider value={{ login: { token }, setCurrentLogin }}>
      <Routes />
      <GlobalStyles />
    </LoginContext.Provider>
  );
};

export default App;
