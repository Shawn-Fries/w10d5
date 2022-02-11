import React from "react";
import Clock from "../frontend/clock";
import Tabs from "../frontend/tabs"

const App = function(props) {
    console.log(props);
    // const titles = [
    //     "one",
    //     "two",
    //     "three"
    // ]

    // const contents = [
    //     "this is one",
    //     "this is two",
    //     "this is three",
    // ]
    const tabs = [
        {title: "one", content: 'this is one'},
        {title: "two", content: 'this is two'},
        {title: "three", content: 'this is three'}
    ]

    return (<div>
        <Clock />
        <Tabs tabProps={tabs}/>
    </div>)
}


export default App;      

/* <ul>
{titles.map((title,i) => {
    return <Tabs key={title} title={title} content={contents[i]}/>
})}
</ul> */