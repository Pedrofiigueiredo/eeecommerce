import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 3fr));
  grid-gap: 30px;
`;