import React from 'react';
import './App.css';
import StateCounter from "./Components/StateCounter/StateCounter";
import HookCounter from "./Components/HookCounter/HookCounter";
import ReducerCounter from "./Components/ReducerCounter/ReducerCounter";
import Header from "./Components/Header/Header";
import  {WrappedReduxCounterComponent} from "./Components/ReduxCounter/ReduxCounter";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <div className="hooksWrapper">
                <Route path="/stateCounter" component={StateCounter}/>
                <Route path="/hookCounter" component={HookCounter}/>
                <Route path="/reducerCounter" component={ReducerCounter}/>
                <Route path="/reduxCounter" component={WrappedReduxCounterComponent}/>
            </div>
        </div>
    )
}

export default App;
