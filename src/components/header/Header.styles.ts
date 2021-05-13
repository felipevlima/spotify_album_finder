import styled from 'styled-components';

export const Content = styled.header`
  width: 100%;
  height: 71px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;

  div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      padding-left: 16px;
      color: #fefefe;
      font-size: 2.2rem;
    }
  }
`;
