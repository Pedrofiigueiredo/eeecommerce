import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;

    > button {
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 100%;
      height: 45px;
      
      font-size: 14px;
      font-weight: 600;
      color: var(--color-white);
      background-color: var(--color-green);

      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: var(--color-green);
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        border-radius: 6px;
      }
    }
  }
`;
