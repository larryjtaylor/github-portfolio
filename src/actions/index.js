import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function fetchRepo(dispatch) {
  return function (dispatch) {
    const repoId = v4();
    dispatch(requestRepo(repoId));
    console.log("hi");
    return fetch("https://api.github.com/users/larryjtaylor/starred")
    .then(
      function(response){
        return response.json();
      },
      function(error) {
       console.log("An error occured.", error);
     })

    .then(function(json) {
      const name = json.name;
      const description = json.description;
      const url = json.html_url;
      return dispatch(receiveRepo(name, description, url, repoId));
    });
  };
}

export const requestRepo = function(repoId) {
  return {
    type: types.REQUEST_REPO,
    repoId
  };
};

export const receiveRepo = (name, description, url, repoId) => ({
  type: types.RECEIVE_REPO,
  repoId,
  name,
  description,
  url
});
