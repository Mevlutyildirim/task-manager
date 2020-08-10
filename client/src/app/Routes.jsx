import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignUpScreen, SignInScreen, HomeScreen, TaskScreen} from 'screens';
import {PageError} from 'shared/components'
const Routes = ()=>{
  return(
    <Switch>
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route exact path="/" component={HomeScreen}/>
      <Route path="/task" component={TaskScreen}/>
      <Route component={PageError}/>
    </Switch>
  )
}

export default Routes;