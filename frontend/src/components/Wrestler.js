import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-bulma-components/lib/components/card';
import Button from 'react-bulma-components/lib/components/button';
import { destroyWrestler } from '../actions/index';

class Wrestler extends Component {
    state = {};

    render() {
        const { id, name, selected, doDestroyWrestler } = this.props;
        return (
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                        {name} {selected}
                    </Card.Header.Title>
                    <Card.Header.Icon>
                        <Button onClick={() => {doDestroyWrestler('http://localhost:3001/wrestler', id);}}>X</Button>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    doDestroyWrestler: PropTypes.func.isRequired
};

Wrestler.defaultProps = {
    selected: false
};

export default connect(null, mapDispatchToProps)(Wrestler);
