import React from 'react';
import styled from 'styled-components';
import { Footer, Hero, Container, Navbar, Content } from 'react-bulma-components/full';
import WrestlerList from './WrestlerList';
import Clock from './Clock';

const H1 = styled.h1`
  font-size:24px;
  font-weight:bold;
`;

const App = () => (
    <Hero>
        <Navbar transparent>
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#"><H1>Wrestle Cards</H1></Navbar.Item>
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
        <Footer>
            <Container>
                <a className="github-button" href="https://github.com/ultamatt" data-show-count="true" aria-label="Follow @ultamatt on GitHub">Follow @ultamatt</a>
            </Container>
        </Footer>
    </Hero>
);

export default App;
