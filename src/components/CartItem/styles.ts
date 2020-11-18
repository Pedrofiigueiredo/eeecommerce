import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;

  position: relative;
`;

export const Image = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 16px;
  
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  > h2 {
    font-size: 14px;
    font-weight: 600;
  }

  > p {
    font-size: 12px;
    color: var(--color-grey)
  }
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
