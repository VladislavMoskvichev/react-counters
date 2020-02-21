import React from 'react';
import './App.css';
import StateCounter from "./Components/StateCounter";
import Example from "./Components/HookCounter";
import ReducerCounter from "./Components/ReducerCounter";

function App() {
    return (
        <div className="appWrapper">
            <StateCounter/>
            <Example/>
            <ReducerCounter/>
        </div>
    )
}

export default App;
