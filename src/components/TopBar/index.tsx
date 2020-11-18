import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  List,
} from './styles';

import { FaShoppingCart } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <Container>
      <List>
        <Link to="/">Acompanhar Pedidos</Link>
        <Link to="/">Login/Inscreva-se</Link>
        <Link to="/">Ajuda</Link>
        <Link to="/cart"><FaShoppingCart /></Link>
      </List>
    </Container>
  );
};

export default TopBar;
