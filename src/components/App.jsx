import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import RepoDisplay from "./RepoDisplay";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/repos" component={RepoDisplay} />
      </Switch>
    </div>
  );
}

export default App;
