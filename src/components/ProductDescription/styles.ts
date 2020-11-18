import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

export const Breadcrumbs = styled.div`
  font-size: 13px;
  color: var(--color-grey);
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  height: 750px;
`;

export const Info = styled.div`
  position: absolute;
  left: 50%;
  padding: 1rem 2rem;

  h1 {
    font-size: 22px;
    font-weight: 300;
    max-width: 500px;
    line-height: 35px;
  }
`;

export const PriceRow = styled.div`
  margin-top: 18px;
  display: flex;
  font-size: 22px;

  .fraction {
    margin-left: 8px;
  }
  .cents {
    font-size: 14px;
    padding-top: 2px;
    margin-left: 3px;
  }
`;

export const Select = styled.div`
  margin: 2rem 0;

  > strong {
    font-size: 14px;
    font-weight: bold;
  }

  > div {
    margin-top: 1rem;
    justify-content: flex-start;

    > div:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export const Pictures = styled.div`
  position: absolute;
  left: 0;
  cursor: zoom-in;
`;

export const ColorList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:not(:last-child) {
    margin-right: 20px;
  }
`;

type ColorProps = { color: string };

export const ColorItem = styled.div<ColorProps>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  background-color: ${props => props.color};

  &:before {
    content: '';
    display: flex;
    width: 36px;
    height: 36px;

    border: 1px solid var(--color-border);
    border-radius: 50%;

    position: absolute;
    top: -8px;
    left: -8px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const FreeShipping = styled.div`
  width: fit-content;
  margin: 10px auto;
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--color-grey);

  > p {
    padding-left: 6px;
  }
`;

export const DescriptionText = styled.div`
  margin-bottom: 4rem;

  > h2 {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 22px;
    color: var(--color-dark);
  }

  > p {
    font-size: 14px;
    line-height: 22px;
    max-width: 700px;
    color: var(--color-grey);
  }
`;

export const MoreProducts = styled.div`
  width: 100%;
`;

export const Products = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;

  > div:not(:first-child) {
    margin-left: 24px;
  }
`;