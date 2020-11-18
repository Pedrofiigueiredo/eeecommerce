import React from 'react';
import { FaTrash } from 'react-icons/fa';

import {
  Container,
  Image,
  Content,
  DeleteIcon
} from './styles';

const CartItem: React.FC = () => {
  return (
    <Container>
      <Image>
        <img src="https://d31wxntiwn0x96.cloudfront.net/dghfbe/productimages/1756.png?width=800&etag=%225da6137315190315a24c01d616a54c57%22" alt="Produto"/>
      </Image>

      <Content>
        <h2>Tênis Nike Kyrie VI Flytrap Masculino</h2>
        <p><strong>Cor: </strong>Amarelo</p>
        <p><strong>Tamanho: </strong>G</p>
      </Content>

      <DeleteIcon>
        <FaTrash size="12" color="212529"/>
      </DeleteIcon>
    </Container>
  );
};

export default CartItem;
