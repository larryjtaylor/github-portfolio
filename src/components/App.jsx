import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import StarredRepos from "./StarredRepos";
import { Switch, Route } from "react-router-dom";

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/repos" component={StarredRepos} />
        <Route exact path="/about" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
