import React, { Component } from 'react';

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
        const hour    = currentTime.getHours();
        const minute  = currentTime.getMinutes();
        const second  = currentTime.getSeconds();

        return (
            <div className='clock'>
                {hour}:{minute}:{second}
            </div>
        );
    }
}

export default Clock;
