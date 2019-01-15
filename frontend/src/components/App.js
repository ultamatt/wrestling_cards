import React from 'react';
import styled from 'styled-components';
import { Container, Section, Navbar, NavbarItem } from 'bulma-styled-components';
import WrestlerList from './WrestlerList';
import Clock from './Clock';

const H1 = styled.h1`
  margin-left:10px;
  font-size:24px;
  font-weight:bold;
`;

const App = () => (
    <Container>
        <Navbar className="is-transparent">
            <Navbar.Brand>
                <NavbarItem><H1>Wrestler Cards</H1></NavbarItem>
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
