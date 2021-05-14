import styled from 'styled-components';

export const Header = styled.div`
  button {
    background: #eee;
    border: none;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.9);
    }
    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Content = styled.div`
  background: #fefefe;
  margin-top: 16px;
`;

export const AlbumInformationContent = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 256px;
    height: 256px;
    border-radius: 8px;
  }

  .information {
    padding-left: 16px;
  }
`;

export const Name = styled.h1`
  color: #333;
  font-weight: bold;
  padding-top: 10px;
`;

export const Artist = styled.h2`
  padding-top: 4px;
  color: #999;
`;

export const SubInfos = styled.div`
  padding-top: 16px;
`;

export const ReleaseDate = styled.p`
  color: #1db954;
`;

export const Tracks = styled.div`
  width: 100%;

  h1 {
    color: #333;
    font-weight: bold;
    padding: 32px 0 16px 0;
  }

  table {
    width: 100%;
  }

  thead {
    tr {
      display: flex;
      justify-content: space-between;

      th {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
          width: 100%;
          justify-content: flex-start;
          max-width: 440px;
        }
        &:last-child {
          justify-content: flex-end;
          width: 54px;
        }
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

      & + tr {
        border-top: 1px solid #eee;
        padding-top: 14px;
      }
      td {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
          width: 100%;
          justify-content: flex-start;
          max-width: 440px;
        }
        &:last-child {
          justify-content: flex-end;
          padding-right: 6px;
          width: 54px;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1db954;
          border-radius: 50%;
          padding: 16px;
          height: 32px;
          width: 32px;
          transition: filter 0.2s ease-in-out;
          &:hover {
            filter: brightness(0.9);
          }
          img {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
`;
