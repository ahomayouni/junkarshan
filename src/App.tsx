import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import HomePage from "./homePage";

function App() {
    return (
        <BrowserRouter basename="/">
            <Route path="/home" component={HomePage} />
            <Route path="/" component={HomePage} />
        </BrowserRouter>
    );
}

export default withRouter(App);
