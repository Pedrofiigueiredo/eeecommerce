import React from 'react';

import {
  Container,
  Logo,
  Nav,
  Menu,
  Search
} from './styles';

import { FaFire, FaSearch } from 'react-icons/fa'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <FaFire size="24" color="b7b7a4" />
        <h1>ecommerce</h1>
      </Logo>

      <Nav>
        <Menu>
          <a href="/">Ofertas</a>
          <a href="/">Masculino</a>
          <a href="/">Feminino</a>
          <a href="/">Infantil</a>
        </Menu>

        <Search>
          {/* <FaSearch size="16" color="#b7b7a4" /> */}
          <input type="text" placeholder="O que você procura?" />
        </Search>
      </Nav>
    </Container>
  );
};

export default Header;
