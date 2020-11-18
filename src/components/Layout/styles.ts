import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 30px;
`;

export const Aside = styled.div`
  width: 100%;
  max-width: 260px;
`;

export const List = styled.ul`
  padding: 32px 12px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--color-border);

  > h3 {
    font-size: 15px;
    margin-bottom: 18px;
    position: relative;

    &::after {
      content: "+";
      position: absolute;
      right: 0;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  > a {
    font-size: 13px;
    text-decoration: none;
    color: var(--color-black);
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
  
  > span {
    font-size: 10px;
  }
`;

export const ColorList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-row-gap: 40px;

  justify-items: center;
`;

export const Color = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: 0.2s;

  font-size: 11px;

  &:hover {
    opacity: 0.8;
    color: var(--color-grey);
  }
`;
export const YellowColor = styled(Color)`
  background-color: #F1AC33;
  &::after {
    content: 'Amarelo';
    position: absolute;
    bottom: -20px;
  }
`;
export const GreenColor = styled(Color)`
  background-color: #003233;
  &::after {
    content: 'Verde';
    position: absolute;
    bottom: -20px;
  }
`;
export const BlueColor = styled(Color)`
  background-color: #0298A6;
  &::after {
    content: 'Azul';
    position: absolute;
    bottom: -20px;
  }
`;
export const BlackColor = styled(Color)`
  background-color: #13142A;
  &::after {
    content: 'Preto';
    position: absolute;
    bottom: -20px;
  }
`;

export const Viewer = styled.div`
`;

export const FiltersBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 24px;

  font-size: 12px;

  margin-bottom: 12px;
`;

export const SizeList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Size = styled.div`
  display: flex;
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 1px;
  cursor: pointer;
  transition: 0.2s;

  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;
