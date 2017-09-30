import React from "react";
import { fetchJoke }  from "./../actions";
import { connect } from "react-redux";

const StarredRepos = ({ dispatch, name, description, url }) => {
  return (
    <div>
      <h1>StarredRepos will go here</h1>
      <h2>Project Name: {name}</h2>
      <h3>Description: {description}</h3>
      <p>View repo: {url}</p><a href=""></a>
      <button onClick={() => {dispatch(fetchRepo())}}>View next</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    description: state.description,
    url: state.html_url
  };
};

export default connect(mapStateToProps) (StarredRepos);
