import React from 'react';
import './App.css';
import  {WrappedReduxCounterComponent} from "./Components/ReduxCounter";
import {Route} from "react-router-dom";
import StateCounter from "./Components/StateCounter";
import HookCounter from "./Components/HookCounter";
import ReducerCounter from "./Components/ReducerCounter";
import Header from "./Components/Header";

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <div className="hooksWrapper">
                <Route path="/stateCounter" render={() => <StateCounter/>}/>
                <Route path="/hookCounter" render={() => <HookCounter/>}/>
                <Route path="/reducerCounter" render={() => <ReducerCounter/>}/>
                <Route path="/reduxCounter" render={() => <WrappedReduxCounterComponent/>}/>
            </div>
        </div>
    )
}

export default App;
