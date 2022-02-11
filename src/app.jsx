import React from "react";
import Clock from "../frontend/clock";
import Tabs from "../frontend/tabs"

const App = function(props) {
    console.log(props);
    const titles = [
        "one",
        "two",
        "three"
    ]

    const contents = [
        "this is one",
        "this is two",
        "this is three",
    ]
    return (<div>
        <Clock />
        <ul>
            {titles.map((title,i) => {
                return <Tabs key={title} title={title} content={contents[i]}/>
            })}
        </ul>
    </div>)
}


export default App;