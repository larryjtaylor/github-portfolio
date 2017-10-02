import constants from "./../constants";

const { defaultState, types } = constants;

const getRepos = (state = defaultState, action) => {
  let newState;
  let newRepo;
  let repo;

  switch (action.type) {
    case types.REQUEST_REPO:
    console.log("request");
      newRepo = {
        isFetching: true,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepo.repoId
      });
      return newState;
    case types.RECEIVE_REPO:
    console.log("receive");
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
