import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Image,
  Content,
  OffTag
} from './styles';

export interface ProductProps {
  id: number,
  image: string,
  hover: string,
  name: string,
  category: string,
  price: string,
  colors: string,
  off?: string, 
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <Container>
      <Image>
        <Link to="/product">
          <img
            src={props.image}
            alt={props.name}
            onMouseOver={e => (e.currentTarget.src = props.hover)}
            onMouseOut={e => (e.currentTarget.src = props.image)}
          />
        </Link>
      </Image>

      <Content>
        {props.off ? (
          <OffTag>
            {props.off}
          </OffTag>
        ) : null}
        
        <h2>
          <Link to="/product">
            {props.name}
          </Link>
        </h2>
        <span>{props.category}</span>
        <p>
          R$ {props.price}<br />
        </p>
        <span>{props.colors}</span>
      </Content>
    </Container>
  );
};

export default Product;
