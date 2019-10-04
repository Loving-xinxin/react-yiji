import { ADD_COMMENT, ADD_C } from './actionTypes';
const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};
const addC = payload => {
  return {
    type: ADD_C,
    payload
  };
};
export { addComment, addC };
