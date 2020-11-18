import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-black);
  background-color: #f5f5f5;

  > h1 {
    margin: 24px 0 8px;
  }
`;

export const Form = styled.div`
  margin-top: 24px;
  display: flex;

  > input {
    width: 280px;
    height: 45px;
    border: 2px solid var(--color-border);
    border-radius: 5px;
    background-color: var(--color-white);

    padding: 16px;
  }

  > button {
    width: 110px;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    background-color: var(--color-border);
  }
`;
