import React from 'react';
import Header from '../header/Header';

import { Container, Content } from './Layout.styles';
import { LayoutTypes } from './Layout.types';

const Layout = ({ children }: LayoutTypes) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
