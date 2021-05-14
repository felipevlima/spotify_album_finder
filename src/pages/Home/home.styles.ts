import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;

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
        border-radius: 16px;
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
