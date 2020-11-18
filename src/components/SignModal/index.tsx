import React from 'react';

import {
  Container,
  Wrapper,
  Signup,
  Login,
  Form,
  Info
} from './styles';

const SignModal: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Signup>
          <h2>Inscreva-se</h2>
          <Form>
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <input type="text" placeholder="Confirme sua senha" />

            <button>Enviar</button>
          </Form>
        </Signup>

        <Login>
        <h2>Entre</h2>
          <Form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />

            <button>Entrar</button>
            <a href="/">Esqueci minha senha</a>

            <Info>
              <p>
                Ao logar você está de acordo com as 
                <a href="/">políticas de privacidade</a> e
                <a href="/">termos de uso</a> do fireCommerce.

              </p>
            </Info>
          </Form>          
        </Login>
      </Wrapper>
    </Container>
  );
};

export default SignModal;
