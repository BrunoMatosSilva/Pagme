import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
  }

  ul {
    display: flex;
    gap: 4rem;
    flex-direction: row;
    align-items: center;

    .mobile {
      display: none;
    }
    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > ul {
        display: none;
      }
    }
  }
  @media(max-width: 700px) {
    padding: 14.5px 16px;
  }

 @media (max-width: 680px) {
     > ul {
        display: none;
      }
    }

@media (min-width: 681px) {
  > section {
    display: none;
  }
}
    span {
      border: 1px solid white;
      width: 80px;
      border-radius: 30px;
      transition: 0.2s;

      &:hover {
        border-color: green;
      }

      a {
        margin-left: 0.7rem;
      }
    }
  }

  section {
    svg {
      color: ${({ theme }) => theme.text};
      font-size: 2rem;
    }
  }
`;

export const NavLinkContainer = styled.li`
  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: normal;
    transition: 0.2s;

    &:hover {
      color: green;
    }
  }
`;
