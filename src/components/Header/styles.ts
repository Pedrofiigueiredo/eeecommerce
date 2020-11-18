import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;

  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 12px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  margin-right: 60px;
  
  > a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: var(--color-black);

    & + a {
      padding-left: 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Search = styled.div`
  > input {
    border: 1px solid var(--color-border);
    width: 250px;
    height: 40px;

    padding: 0 1rem;
  }
`;

