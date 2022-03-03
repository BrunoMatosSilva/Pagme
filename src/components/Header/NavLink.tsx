import React from 'react';
import { NavLinkContainer } from './styles'

interface Props {
    title: string;
    path: string;
}

export default function NavLink({ path, title }: Props) {
    return (
        <NavLinkContainer>
            <a href={path}>{title}</a>
        </NavLinkContainer>
    );
}