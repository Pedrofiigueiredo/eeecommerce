import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container } from './styles';

import Product, { ProductProps } from '../Product';

const ProductsList: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await api.get('/products');
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, [filter]);

  return (
    <Container>
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
      <Product
        id={1}
        image="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw302280e4/TH6709_FY5_22.jpg?imwidth=645&impolicy=product"
        hover="https://images-na.ssl-images-amazon.com/images/I/81FMwedyVQL._AC_UL1500_.jpg"
        name="Camisa polo masculina com estampa colorida Slim Fit"
        category="Camisa"
        price="119,00"
        colors="1 Cor"
        off="5% de desconto"
      />

      {products.map((product: ProductProps) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          hover={product.hover}
          name={product.name}
          category={product.category[0]}
          price={product.price}
          colors={product.colors[0]}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
