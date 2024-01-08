import React from "react";

class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button className="bg-green-600 px-3 py-2 rounded-md text-white" onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default ClickCounter;