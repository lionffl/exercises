const { createStore, combineReducers } = Redux;

const ADD_MESSAGE = 'ADD_MESSAGE';

const INITIAL_STATE = {
  messages: [],
}

const actionCreatorAddMessage = (name, message) => ({
  type: ADD_MESSAGE,
  payload: {
    name,
    message,
  },
})

const action = {
  type: ADD_MESSAGE,
  payload: {
    name: '',
    message: '',
  },
}

const reducer = (state = INITIAL_STATE, action) => {
  
  if(action.type === ADD_MESSAGE) {
    return {
      messages: [...state.messages, action.payload]
    }
  }
  
  return state;
}

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer);

store.dispatch(actionCreatorAddMessage('lion', 'hello'));

store.dispatch(actionCreatorAddMessage('dart', 'cya'));

console.log(store.getState());