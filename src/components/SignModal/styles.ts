import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;

  width: 860px;
  padding: 64px;

  border-radius: 3px;
  background-color: var(--color-white);
`;


export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > h2 {
    font-weight: bold;
    margin-bottom : 24px;
  }
`;

export const Signup = styled(Block)`
`;

export const Login = styled(Block)`
`;

export const Form = styled.div`
  > input {
    width: 100%;
    height: 42px;
    border: 1px solid var(--color-border);
    border-radius: 3px;

    padding: 16px;
    margin-bottom: 12px;
  }

  > button {
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: var(--color-white);
    background-color: var(--color-orange);
    cursor: pointer;

    margin-bottom: 16px;

    &:hover {
      opacity: 0.9;
    }
  }

  > a {
    font-size: 14px;
    color: var(--color-grey);
    text-decoration: none;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  > p {
    font-size: 12px;
    color: var(--color-grey);
  }
`;

