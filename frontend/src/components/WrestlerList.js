import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import { getWrestlers, selectWrestler } from '../actions/index';
import Wrestler from './Wrestler';
import WrestlerAdd from './WrestlerAdd';
/* global __BackendUrl__ */

class WrestlerList extends Component {
    state = {};

    constructor(props){
        super(props);
        this.selectOne = this.selectOne.bind(this);
    }

    componentDidMount() {
        const { doGetWrestlers } = this.props;
        doGetWrestlers(`${__BackendUrl__ }:3001/wrestler`);
    }

    selectOne(event){
        event.preventDefault();
        const { doSelectWrestler } = this.props;
        doSelectWrestler();
    }

    render() {
        const { wrestlers, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return (<p>Sorry! There was an error loading the items</p>);
        } if (isLoading) {
            return (<p>Loading…</p>);
        }

        return (
            <Section>
                <WrestlerAdd/>
                <Columns>
                    <Columns.Column narrow>
                        <Button onClick={this.selectOne}>Back</Button>
                    </Columns.Column>
                    <Columns.Column className="has-text-centered">
                        {
                            wrestlers.filter((it) => it.selected === true).map((wrestler) => (
                                <Wrestler key={wrestler.id}
                                    id={wrestler.id}
                                    name={wrestler.name}
                                    description={wrestler.description}
                                    picture={wrestler.picture}/>
                            ))
                        }
                    </Columns.Column>
                    <Columns.Column narrow>
                        <Button onClick={this.selectOne}>Next</Button>
                    </Columns.Column>
                </Columns>
            </Section>
        );
    }
};

WrestlerList.propTypes = {
    doGetWrestlers: PropTypes.func.isRequired,
    doSelectWrestler: PropTypes.func.isRequired,
    wrestlers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
};

WrestlerList.defaultProps = {
    hasErrored: false,
    isLoading: true
};

const mapStateToProps = (state) => {
    return {
        wrestlers: state.wrestlers,
        hasErrored: state.wrestlersHaveErrored,
        isLoading: state.wrestlersAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doGetWrestlers: (url) => dispatch(getWrestlers(url)),
        doSelectWrestler: (url) => dispatch(selectWrestler(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrestlerList);
