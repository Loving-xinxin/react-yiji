import { ADD_COMMENT } from './actionTypes';
const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};
export { addComment };
