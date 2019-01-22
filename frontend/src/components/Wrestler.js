import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-bulma-components/lib/components/card';
import Button from 'react-bulma-components/lib/components/button';
import { Label, Control, Field, Input } from 'react-bulma-components/lib/components/form';
import { updateWrestler, destroyWrestler, uploadImage } from '../actions/index';
/* global __BackendUrl__ */

class Wrestler extends Component {
    state = {};

    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.description = props.description;
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({ description: event.target.value });
    }

    handleSubmit(){
        const { id, doUpdateWrestler } = this.props;
        const { description } = this.state;
        doUpdateWrestler(`${__BackendUrl__ }:3001/wrestler/${id}`, { description });
    }

    handleFileUpload(event){
        const {id, doUploadWrestlerImage} = this.props;
        event.preventDefault();
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('id',  id);
        doUploadWrestlerImage(`${__BackendUrl__ }:3001/wrestler/${id}`, data);
    }

    render() {
        const { id, name, picture, doDestroyWrestler } = this.props;
        const { description } = this.state;
        return (
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                        {name}
                    </Card.Header.Title>
                    <Card.Header.Icon>
                        <Button onClick={() => {doDestroyWrestler(`${__BackendUrl__ }:3001/wrestler`, id);}}>X</Button>
                    </Card.Header.Icon>
                </Card.Header>
                <Card.Content>
                    <Card.Image size="4by3" src={`${__BackendUrl__ }:3001/images/${ picture}` }></Card.Image>
                    <form onSubmit={this.handleSubmit}>
                        <Field className="is-grouped">
                            <Control className="is-expanded">
                                <Input type="text" value={description} onChange={this.handleChange} />
                            </Control>
                            <Control>
                                <Button className="button is-primary" type="submit"> update </Button>
                            </Control>
                        </Field>
                    </form>
                    <form>
                        <Field className="is-grouped">
                            <Label className="file-label">
                                <Input className="file-input" type="file" onChange={this.handleFileUpload} name='image' />
                                <span className="file-cta">
                                  Choose a file…
                                </span>
                            </Label>
                        </Field>
                    </form>
                </Card.Content>
            </Card>
        );
    }
};

const mapStateToProps = (state, props) =>({
    description: props.description
});

const mapDispatchToProps = (dispatch) => {
    return {
        doDestroyWrestler: (url, id) => { dispatch(destroyWrestler(url, id));},
        doUploadWrestlerImage: (url, file) => { dispatch(uploadImage(url, file));},
        doUpdateWrestler: (url, data) => { dispatch(updateWrestler(url, data));},
    };
};

Wrestler.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
    doDestroyWrestler: PropTypes.func.isRequired,
    doUploadWrestlerImage: PropTypes.func.isRequired,
    doUpdateWrestler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrestler);
