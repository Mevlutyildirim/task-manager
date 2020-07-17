import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignUpScreen from "./screens/signUpScreen";

function Main() {
  return (
    <Switch>
      <Route path="/signup" component={SignUpScreen} />
    </Switch>
  );
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
