import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  height: 100vh;

  > h1 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const CartList = styled.div`
  background-color: var(--color-white);
  width: 520px;
  padding: 1.8rem;
  border-radius: 3px;

  > h3 {
    font-weight: 600;
    text-align: center;
  }
`;

export const TotalPrice = styled.div`
  margin-left: 24px;
  background-color: var(--color-white);
  width: 300px;
  height: fit-content;
  padding: 1.8rem;
  border-radius: 3px;
`;

type RowProps = { divider?: boolean };

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;

  font-size: 13px;

  border-top: ${props => props.divider ? "1px solid var(--color-border);" : "none"};
  padding-top: ${props => props.divider ? "14px" : "0px"};
  padding-bottom: 14px;

  > b {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-green);
  }

  > strong { font-weight: 700; }
  > p { font-weight: 300; }
`;

