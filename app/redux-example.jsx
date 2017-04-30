var redux = require('redux');

console.log('starting redux exmaple');

var stateDefault = {
  name: 'John'
};

var reducer = (state = stateDefault, action ) => {

  console.log('New action', action);
  switch(action.type)
  {
    case "CHANGE_NAME":
        return {
          ...state,
          name: action.name
        }
    default:
      return state;
  }
}


var store = redux.createStore(reducer);

var currentState = store.getState();

console.log(currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
}

store.dispatch(action);

console.log('Name should be Andrew', store.getState())
