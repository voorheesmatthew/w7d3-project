import * as APIUtil from '../util/api_util';

export const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = () => (dispatch) => (
  APIUtil.fetchSinglePokemon(pokemon)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)
