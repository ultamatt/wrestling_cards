import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-bulma-components/lib/components/card';
import Button from 'react-bulma-components/lib/components/button';
import { Label, Field, Input } from 'react-bulma-components/lib/components/form';
import { destroyWrestler, uploadImage } from '../actions/index';
/* global __BackendUrl__ */

class Wrestler extends Component {
    state = {};

    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(event){
        const {id, doUploadWrestlerImage} = this.props;
        event.preventDefault();
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('id',  id);
        doUploadWrestlerImage(`${__BackendUrl__ }:3001/wrestler/${id}/image`, data);
    }

    render() {
        const { id, name, description, picture, doDestroyWrestler } = this.props;
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
                    <h5>{ description }</h5>
                    <Card.Image size="4by3" src={`${__BackendUrl__ }:3001/images/${ picture}` }></Card.Image>
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

const mapDispatchToProps = (dispatch) => {
    return {
        doDestroyWrestler: (url, id) => { dispatch(destroyWrestler(url, id));},
        doUploadWrestlerImage: (url, file) => { dispatch(uploadImage(url, file));},
    };
};

Wrestler.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
    doDestroyWrestler: PropTypes.func.isRequired,
    doUploadWrestlerImage: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Wrestler);
