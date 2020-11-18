import React from 'react';
import { FaTruck } from 'react-icons/fa';

import Button from '../Button';

import {
  SizeList,
  Size
} from '../Layout/styles';
import Product from '../Product';

import {
  Container,
  Breadcrumbs,
  Info,
  PriceRow,
  Select,
  ColorList,
  ColorItem,
  Pictures,
  Description,
  FreeShipping,
  DescriptionText,
  MoreProducts,
  Products,
} from './styles';

const ProductDescription: React.FC = () => {
  return (
    <Container>
      <Breadcrumbs>
        <p>Início &gt; Camisas &gt; Essa</p>
      </Breadcrumbs>

      <Description>
        <Pictures>
          <img src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwf06bd710/TH4274_6XP_20.jpg?imwidth=645&impolicy=product" alt="Produto"/>
        </Pictures>

        <Info>
          <h1>Camiseta masculina em algodão com decote careca e logo de onda</h1>
          <PriceRow>
            <p>R$</p>
            <p className="fraction">149</p>
            <p className="cents">99</p>
          </PriceRow>
          <Select>
            <strong>Selecione seu tamanho</strong>
            <SizeList>
              <Size>P</Size>
              <Size>M</Size>
              <Size>G</Size>
              <Size>GG</Size>
              <Size>GGG</Size>
            </SizeList>
          </Select>

          <Select>
            <strong>Selecione a cor</strong>
            <ColorList>
              <ColorItem color="#F1AC33" />
              <ColorItem color="#003233" />
              <ColorItem color="#0298A6" />
              <ColorItem color="#13142A" />
            </ColorList>
          </Select>

          <Button text="Adicionar ao carrinho"/>
          <FreeShipping>
            <FaTruck size="16" color="b7b7a4"/>
            <p>Frete GRÁTIS para todo o país</p>
          </FreeShipping>
          
        </Info>
      </Description>

      <DescriptionText>
        <h2>Descrição do produto</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum molestiae doloremque mollitia quos quasi magni 
          esse quidem soluta! Maxime, deleniti in nesciunt repellendus 
          excepturi similique dolores beatae natus possimus voluptatum?<br/><br/>

          Lorem ipsum<br/><br/>
          
          dolor sit amet;<br/>
          consectetur adipisicing;<br/>
          100% consectetur;<br/><br/>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum molestiae doloremque mollitia quos quasi magni 
          esse quidem soluta! Maxime, deleniti in
        </p>
      </DescriptionText>

      <MoreProducts>
        <h2>Você também pode gostar</h2>
        <Products>
          <Product
            id={1}
            image="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwf06bd710/TH4274_6XP_20.jpg?imwidth=645&impolicy=product"
            hover="https://d31wxntiwn0x96.cloudfront.net/dghfbe/productimages/1756.png?width=800&etag=%225da6137315190315a24c01d616a54c57%22"
            name="Camiseta masculina em algodão com decote careca e logo de onda"
            category="Camisa"
            price="119,00"
            colors="1 Cor"
            off="25% de desconto"
          />
          <Product
            id={1}
            image="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw927980b3/TH6709_031_20.jpg?imwidth=645&impolicy=product"
            hover="https://images-na.ssl-images-amazon.com/images/I/81FMwedyVQL._AC_UL1500_.jpg"
            name="Camiseta Masculina em Jérsei de Algodão Pima com Gola V"
            category="Camisa"
            price="179,00"
            colors="1 Cor"
          />
          <Product
            id={1}
            image="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw4f9b3e34/PH8525_166_20.jpg?imwidth=645&impolicy=product"
            hover="https://images-na.ssl-images-amazon.com/images/I/81FMwedyVQL._AC_UL1500_.jpg"
            name="Camisa polo masculina com estampa colorida Slim Fit"
            category="Camisa"
            price="119,00"
            colors="1 Cor"
          />
          <Product
            id={1}
            image="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw4e51f2ff/TH6709_FY5_20.jpg?imwidth=645&impolicy=product"
            hover="https://images-na.ssl-images-amazon.com/images/I/81FMwedyVQL._AC_UL1500_.jpg"
            name="Camisa polo masculina com estampa colorida Slim Fit"
            category="Camisa"
            price="119,00"
            colors="1 Cor"
          />
        </Products>
      </MoreProducts>
    </Container>
  );
};



export default ProductDescription;
