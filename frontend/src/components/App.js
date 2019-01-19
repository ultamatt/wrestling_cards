import React from 'react';
import styled from 'styled-components';
import { Container, Navbar, Content } from 'react-bulma-components/full';
import WrestlerList from './WrestlerList';
import Clock from './Clock';

const H1 = styled.h1`
  font-size:24px;
  font-weight:bold;
`;

const App = () => (
    <Container>
        <Navbar transparent>
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#"><H1>Wrestler Cards</H1></Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    <Navbar.Item href="#"><Clock/></Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
        <Content>
            <WrestlerList/>
        </Content>
    </Container>
);

export default App;
