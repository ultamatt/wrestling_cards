import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Delete } from 'bulma-styled-components';
import { destroyWrestler } from '../actions/index';

class Wrestler extends Component {
    state = {};

    render() {
        const { id, name, doDestroyWrestler } = this.props;
        return (
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                        {name}
                    </Card.Header.Title>
                    <Card.Header.Icon>
                        <Delete onClick={() => {doDestroyWrestler('http://localhost:3001/wrestler', id);}}/>
                    </Card.Header.Icon>
                </Card.Header>
            </Card>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doDestroyWrestler: (url, id) => { dispatch(destroyWrestler(url, id));}
    };
};

Wrestler.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
    doDestroyWrestler: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Wrestler);
