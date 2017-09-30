import constants from "./../constants";
import v4 from "uuid/v4";

const { defaultState, types } = constants;

const getRepos = (state = defaultState, action) => {
  let newState;
  let newRepo;
  let Repo;

  switch (action.type) {
    case types.REQUEST_REPO:
      newRepo = {
        isFetching: true,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo
      });
      return newState;
    case types.RECEIVE_REPO:
      repo = state[action.repoId];
      newRepo = {
        isFetching: false,
        name: action.name,
        description: action.description,
        url: action.html_url,
        repoId: action.repoId
    };

    return newRepo;
      default:
        return state;
  }
};

export default getRepos;
