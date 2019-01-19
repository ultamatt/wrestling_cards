import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Button } from 'react-bulma-components';
import { Field, Input, Label, Control } from 'react-bulma-components/lib/components/form';
import { addWrestler } from '../actions/index';

class WrestlerAdd extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { name:"" };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({name:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const { doAddWrestler } = this.props;
        const { name } = this.state;
        doAddWrestler('http://localhost:3001/wrestler', {name});
        this.setState({name:""});
    }

    render() {
        const { name } = this.state;
        return (
            <Box>
                <form onSubmit={this.handleSubmit}>
                    <Field className="is-grouped">
                        <Label>Add a New Wrestler</Label>
                        <Control className="is-expanded">
                            <Input required type="text" placeholder="Enter a Wrestler's Name" value={name} onChange={this.handleChange}/>
                        </Control>
                        <Control>
                            <Button className="button is-primary" type="submit"> Create </Button>
                        </Control>
                    </Field>
                </form>
            </Box>
        );
    }
};

const mapStateToProps = (state, props) =>({
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
