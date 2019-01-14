import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Delete } from 'bulma-styled-components';

class Wrestler extends Component {
    state = {};

    render() {
        const { id, name } = this.props;
        return (
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                        {name}
                    </Card.Header.Title>
                    <Card.Header.Icon>
                        <Delete toKill={id}/>
                    </Card.Header.Icon>
                </Card.Header>
            </Card>
        );
    }
};

Wrestler.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Wrestler;
