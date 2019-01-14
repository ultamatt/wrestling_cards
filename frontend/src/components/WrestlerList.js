import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { wrestlersFetchData } from '../actions/index';

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
    state = {};

    componentDidMount() {
        const { fetchData } = this.props;
        fetchData('http://localhost:3001/wrestler');
    }

    render() {
        const { wrestlers, hasErrored, isLoading } = this.props;

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

WrestlerList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    wrestlers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        wrestlers: state.wrestlers,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(wrestlersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrestlerList);
