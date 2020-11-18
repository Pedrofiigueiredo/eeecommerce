import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 36px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 40px;
`;

export const List = styled.div`
    > a {
    font-size: 12px;
    text-decoration: none;
    color: var(--color-grey);
    transition: 0.2s;
  
    & + a {
      margin-left: 30px;
    }
    &:hover {
      opacity: 0.6;
    }
  }
`;

