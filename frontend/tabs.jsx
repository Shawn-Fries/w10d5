import React from "react";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            index: 0,
            title: props['tabProps'][0]['title'],
            content: props['tabProps'][0]['content']
        };
        this.selectTab = this.selectTab.bind(this)
    }

    selectTab(index) {
        this.setState({content: this.props['tabProps'][index]['content']})
    }

    render() {
        // debugger
        return(
            <div>
                <div>
                {this.props['tabProps'].map((tab,index) => {
                   return <h1 onClick={this.selectTab(index)}>{tab.title}</h1> 
                })}
                </div>
                <div>
                    <article>{this.state.content}</article>
                </div>
            </div>
        )
    }
}

export default Tabs