import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;

  @media (max-width: 550px) {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .icon {
      width: 30px;
      height: 30px;
    }

    p {
      color: ${({ theme }) => theme.textlight};
      font-size: 0.8rem;
      text-transform: uppercase;

      @media (max-width: 1230px) {
        font-size: 0.6rem;
      }

      @media (max-width: 930px) {
        font-size: 0.5rem;
      }
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

      @media (max-width: 1230px) {
        font-size: 3rem;
      }

      @media (max-width: 930px) {
        font-size: 2.5rem;
      }

      @media (max-width: 425px) {
        font-size: 2rem;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.5rem;

      @media (max-width: 1230px) {
        font-size: 0.8rem;
      }
    }
  }

  section {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 5rem;

    @media (max-width: 320px) {
      gap: 3rem;
    }

    button:first-child {
      background-color: #4e4cb7;
      padding: 0.8rem;
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
      border-radius: 30px;
      border: none;
      transition: 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.textlight};
      }

      @media (max-width: 375px) {
        font-size: 0.8rem;
      }

      @media (max-width: 320px) {
        font-size: 0.8rem;
        width: 130px;
      }
    }
    button:last-child {
      background: none;
      border: none;
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      font-weight: bold;
      transition: 0.2s;

      &:hover {
        color: ${({ theme }) => theme.textlight};
      }

      @media (max-width: 375px) {
        font-size: 0.8rem;
      }

      @media (max-width: 320px) {
        font-size: 0.8rem;
        width: 100px;
      }
      svg {
        margin-right: 10px;
        font-size: 0.8rem;
      }
    }
  }
`;
