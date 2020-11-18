import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  cursor: pointer;
`;

export const Image = styled.div`
  a {
    display: flex;
    width: 100%;
    height: 280px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    opacity: 0.9;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  > h2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
    
    > a {
      text-decoration: none;
      color: var(--color-black);
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > span {
    font-size: 13px;
    color: var(--color-grey);
  }

  > p {
    margin-top: 10px;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 4px;
  }
`;

export const OffTag = styled.div`
  width: fit-content;
  padding: 4px 6px;

  font-size: 12px;
  color: var(--color-white);

  border-radius: 5px;
  background-color: var(--color-grey);
  margin-bottom: 12px;
`;