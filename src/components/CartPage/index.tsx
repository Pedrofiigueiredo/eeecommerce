import React from 'react';

import CartItem from '../CartItem';
import Button from '../Button';

import {
  Container,
  Content,
  CartList,
  TotalPrice,
  Row
} from './styles';

const CartPage: React.FC = () => {
  return (
    <Container>
      <h1>Seu carrinho</h1>
      <Content>
        <>    
          <CartList>
            <h3>Itens</h3>
            <CartItem />
            <CartItem />
            <CartItem />
          </CartList>
        </>

        <TotalPrice>
          <Row>
            <p>1 produto</p>
            <strong>R$ 119,99</strong>
          </Row>
          <Row>
            <p>Entrega</p>
            <strong>R$ 0,00</strong>
          </Row>
          <Row divider>
            <b>Total</b>
            <strong>R$ 119,99</strong>
          </Row>

          <Button text="Finalizar compra" />
        </TotalPrice>
      </Content>
    </Container>
  );
};

export default CartPage;
