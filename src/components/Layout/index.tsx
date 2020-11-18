import React from 'react';

import {
  Container,
  Aside,
  List,
  Category,
  ColorList,
  YellowColor,
  GreenColor,
  BlueColor,
  BlackColor,
  SizeList,
  Size,
  Viewer,
  FiltersBar
} from './styles';

import { categories } from '../../data/categories';

import ProductsList from '../ProductsList';

const Layout: React.FC = () => {
  return (
    <Container>
      <Aside>
        <h2>Ache seu novo estilo</h2>
        <List>
          <h3>Categoria</h3>
          {categories.map((category: string) => (
            <Category>
              <a href="/">{category}</a>
              <span>(19)</span>
            </Category>
          ))}

        </List>

        <List>
          <h3>Cores</h3>
          <ColorList>
            <YellowColor />
            <GreenColor />
            <BlueColor />
            <BlackColor />
          </ColorList>
        </List>

        <List>
          <h3>Tamanhos</h3>
          <SizeList>
            <Size>P</Size>
            <Size>M</Size>
            <Size>G</Size>
            <Size>GG</Size>
            <Size>GGG</Size>
          </SizeList>
        </List>

        <List>
          <h3>Marca</h3>
        </List>

        <List>
          <h3>Modelo</h3>
        </List>
      </Aside>

      <Viewer>
        <FiltersBar>
          <p>Ordenar por</p>
        </FiltersBar>
        <ProductsList />
      </Viewer>
    </Container>
  );
};

export default Layout;
