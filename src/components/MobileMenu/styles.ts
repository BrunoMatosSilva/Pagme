import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(230deg, rgba(0, 0, 0, 1) 0%, rgba(43, 29, 132, 1) 95%);

  opacity: 0;
  pointer-events: none;
  transform: translateX(50px);
  transition: 0.9s;

  > svg {
    position: absolute;
    color: ${({ theme }) => theme.text};
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  span {
    border: 1px solid white;
    width: 80px;
    border-radius: 30px;
    transition: 0.2s;

    &:hover {
      border-color: ${({ theme }) => theme.textlight};
    }

    a {
      margin-left: 1rem;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg {
        transform: rotate(0deg);
      }
      ul {
        transform: scale(1);
      }
    `}
`;
