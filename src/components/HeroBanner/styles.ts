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
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 425px) {
      flex-direction: column;
    }

    img {
      width: 41rem;
      height: auto;

      @media (max-width: 1230px) {
        width: 35rem;
      }

      @media (max-width: 1020px) {
        width: 30rem;
      }

      @media (max-width: 930px) {
        width: 20rem;
      }

      @media (max-width: 425px) {
        width: 18rem;
      }

      @media (max-width: 375px) {
        width: 15rem;
      }
    }
  }
`;
