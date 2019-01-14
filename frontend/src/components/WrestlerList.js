import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content } from 'bulma-styled-components';
import { wrestlersFetchData } from '../actions/index';
import Wrestler from './Wrestler';

class WrestlerList extends Component {
    state = {};

    componentDidMount() {
        const { getWrestlers } = this.props;
        getWrestlers('http://localhost:3001/wrestler');
    }

    render() {
        const { wrestlers, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return (<p>Sorry! There was an error loading the items</p>);
        } if (isLoading) {
            return (<p>Loading…</p>);
        }

        return (<Content>
            {wrestlers.map((wrestler) => (
                <Wrestler key={wrestler.id} name={wrestler.name}/>
            ))}
        </Content>
        );
    }
};

WrestlerList.propTypes = {
    getWrestlers: PropTypes.func.isRequired,
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
        getWrestlers: (url) => dispatch(wrestlersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrestlerList);
