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
}

ul {
    display: flex;
    gap: 4rem;
    flex-direction: row;
    align-items: center;

    span {
    border: 1px solid white;
    width: 80px;
    border-radius: 30px;

    a {
        margin-left: 0.7rem;
    }
    }
}
`;

export const NavLinkContainer = styled.li`
a{
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: normal;
}
`
