import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Name = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;

class Wrestler extends Component {
    state = {
        name: 'Macho Man',
        hasErrored: false,
        isLoading: false
    };

    componentDidMount() {
        this.fetchData('http://localhost:3001');
    }

    fetchData = (url) => {
        this.setState({ isLoading: true });
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response;
            })
            .then((response) => response.json())
            .then((name) => this.setState({ name })) // ES6 property value shorthand for { items: items }
            .catch(() => this.setState({ hasErrored: true }));
    };

    render() {
        const { name, hasErrored, isLoading } = this.state;

        if (hasErrored) {
            return (<p>Sorry! There was an error loading the items</p>);
        } if (isLoading) {
            return (<p>Loading…</p>);
        }

        return (
            <Container>
                <Thumbnail />
                <Name>{name}</Name>
            </Container>
        );
    }

};

export default Wrestler;