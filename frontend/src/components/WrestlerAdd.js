import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Field, Control, Input, Button } from 'bulma-styled-components';
import { addWrestler } from '../actions/index';

class WrestlerAdd extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { id:0, name:"" };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({name:event.target.value});
    }

    render() {
        const { doAddWrestler } = this.props;
        const { id, name } = this.state;
        return (
            <Box>
                <Field className="is-grouped">
                    <Control className="is-expanded">
                        <Input required type="text" placeholder="Enter a Wrestler's Name" value={name} onChange={this.handleChange}/>
                    </Control>
                    <Control>
                        <Button className="button is-primary" onClick={() => {doAddWrestler('http://localhost:3001/wrestler', {id, name});}}> Add New Wrestler</Button>
                    </Control>
                </Field>
            </Box>
        );
    }
};

const mapStateToProps = (state, props) =>({
    id:props.id,
    name: props.name
});

const mapDispatchToProps = (dispatch) => {
    return {
        doAddWrestler: (url, obj) => { dispatch(addWrestler(url, obj));}
    };
};

WrestlerAdd.propTypes = {
    doAddWrestler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WrestlerAdd);
