import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url('/img/sidedesign.svg');
  background-repeat: no-repeat;
  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;
