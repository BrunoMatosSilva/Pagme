import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -8rem;

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;

    img {
      width: 41rem;
      height: 46.25rem;
    }

    div {
      display: flex;
      flex-direction: column;
      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        img {
          width: 30px;
          height: 30px;
        }

        p {
          color: ${({ theme }) => theme.textlight};
          font-size: 0.8rem;
          text-transform: uppercase;
        }
      }

      main {
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.text};

        h1 {
          margin-top: 1rem;
          font-size: 4.5rem;
          font-weight: 600;
        }

        p {
          margin-top: 1rem;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      section {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 10rem;

        button:first-child {
          background-color: #4e4cb7;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: bold;
          color: ${({ theme }) => theme.text};
          border-radius: 30px;
          border: none;
        }
        button:last-child {
          background: none;
          border: none;
        }
      }
    }
  }
`;
