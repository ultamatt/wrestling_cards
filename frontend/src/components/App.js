import React from 'react';
import { Container, Section, Navbar, NavbarItem } from 'bulma-styled-components';
import WrestlerList from './WrestlerList';
import Clock from './Clock';

const App = () => (
    <Container>
        <Navbar className="is-transparent">
            <Navbar.Brand>
                <NavbarItem> Wrestler Cards</NavbarItem>
            </Navbar.Brand>
            <Navbar.End>
                <Clock/>
            </Navbar.End>
        </Navbar>
        <Section>
            <WrestlerList />
        </Section>
    </Container>
);

export default App;
