import React from 'react';

import {
  Container,
  Form,
} from './styles';

import { FiCalendar } from 'react-icons/fi'

const Newsletter: React.FC = () => {
  return (
    <Container>
      <FiCalendar size="104" color="000" />
      <h1>Fique sempre por dentro das novidades</h1>
      <p>Cadastre-se para receber promoções por email</p>
      
      <Form>
        <input type="text" placeholder="nome@email.com" />
        <button>Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Newsletter;
