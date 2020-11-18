import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ButtonProps {
  text: string,
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Container>
      <Link to="/">
        <button>
          {text}
        </button>
      </Link>
    </Container>
  );
};

export default Button;
