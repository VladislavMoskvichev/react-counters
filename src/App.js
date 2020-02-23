import React from 'react';
import './App.css';
import StateCounter from "./Components/StateCounter";
import HookCounter from "./Components/HookCounter";
import ReducerCounter from "./Components/ReducerCounter";
import Header from "./Components/Header";
import ReduxCounter from "./Components/ReduxCounter";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <div className="hooksWrapper">
                <Route path="/stateCounter" component={StateCounter}/>
                <Route path="/hookCounter" component={HookCounter}/>
                <Route path="/reducerCounter" component={ReducerCounter}/>
                <Route path="/reduxCounter" component={ReduxCounter}/>
            </div>
        </div>
    )
}

export default App;
