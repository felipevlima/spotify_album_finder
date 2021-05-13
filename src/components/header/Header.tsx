import React from 'react';
import { Content } from './Header.styles';
import Logo from '../../assets/icons/spotify.png';

const Header = () => (
  <Content>
    <div>
      <img src={Logo} alt="Logo" />
      <h1>Spotify Search</h1>
    </div>
  </Content>
);

export default Header;
