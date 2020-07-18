import React from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import SignUpScreen from "./screens/signUpScreen";
import SignInScreen from './screens/signInScreen';

function Main() {
  return (
    <Switch>
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/signin" component={SignInScreen} />
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