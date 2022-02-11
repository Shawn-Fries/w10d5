import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
        this.interval = 0;
    }

    tick() {
        //debugger;
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    render() {
        // console.log(this.state.time)
        return (
           
            <div>
                <h1>Clock</h1>
                <div className="clock">
                    <div>Time</div>
                    <div>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</div>
                </div>
                <div className="date">
                    <div>Date</div>
                    <div>{this.state.time.getFullYear()}-{this.state.time.getMonth()}-{this.state.time.getDate()}</div>
                </div>


            </div>
            
        )
    }
}

export default Clock;