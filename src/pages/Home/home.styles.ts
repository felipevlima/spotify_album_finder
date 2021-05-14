import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
    color: #333;
    font-weight: bold;
    padding-bottom: 12px 0 24px 0;
  }

  table {
    width: 100%;
    margin-top: 16px;

    thead {
      tr {
        display: flex;
        justify-content: space-between;
        th {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    tbody {
      width: 100%;

      tr {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        transition: background-color 0.1s ease-in-out;

        &:hover {
          background-color: #eee;
          cursor: pointer;
        }

        td {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 64px;
            height: 64px;
            border-radius: 8px;
          }

          color: #333;
        }
      }
    }
  }
`;
