import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Time=styled.div`
  margin-top:10px;
  margin-right 10px;
  font-size:12px;
  color:darkgrey;
`;

class Clock extends Component {
    state = { currentTime: new Date() }

    componentDidMount() {
        this.setState({
            currentTime: new Date()
        }, this.updateTime);
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }

    updateTime = () => {
        this.timerId = setTimeout(() => {
            this.setState({
                currentTime: new Date()
            }, this.updateTime);
        });
    }

    render() {
        const { currentTime } = this.state;
        const display = moment(currentTime).format('h:mm:ss a');

        return (
            <Time>{display}</Time>
        );
    }
}

export default Clock;
