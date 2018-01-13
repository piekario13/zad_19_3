import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const initialState = {
    comments: [],
    users: []
};

function reducer(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return  [
        ...state,
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
        ]
    case EDIT_COMMENT:
      return  state.map(comment => {
          if (comment.id === action.id) {
            return {
              ...comment,
              text: action.text
            }
          }
          return comment;
        });

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    case THUMB_UP_COMMENT:
      return state.map(comment => {
          if (comment.id === action.id) {
            return {
              ...comment,
              votes: comment.votes + 1
            }
          }
        });

    case THUMB_DOWN_COMMENT:
    return state.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            votes: comment.votes - 1
          }
        }
      });
    default:
      return state;
  }
}

const app = combineReducers({
    comments,
    users
});