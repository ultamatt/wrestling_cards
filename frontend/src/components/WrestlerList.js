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

const Showcase = styled.div`
    flex-grow: 1;
    width: 200px;
    height: 400px;
    padding: 5px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 8px;
`;

const Name = styled.h1`
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
`;

class WrestlerList extends Component {
    state = {
        wrestlers: [
            {
                id: 1,
                name: 'Macho Man'
            },{
                id: 2,
                name: 'Hulk Hogan'
            },{
                id: 3,
                name: 'John Cena'
            }
        ],
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
            .then((wrestlers) => this.setState({ wrestlers:wrestlers.data })) // ES6 property value shorthand for { items: items }
            .catch(() => this.setState({ hasErrored: true }));
    };

    render() {
        const { wrestlers, hasErrored, isLoading } = this.state;

        if (hasErrored) {
            return (<p>Sorry! There was an error loading the items</p>);
        } if (isLoading) {
            return (<p>Loading…</p>);
        }

        return (
            <Container>
                {wrestlers.map((wrestler) => (
                    <Showcase>
                        <Name key={wrestler.id}>
                            {wrestler.name}
                        </Name>
                    </Showcase>
                ))}
            </Container>
        );
    }

};

export default WrestlerList;
