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


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to CHANGE_NAME
store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);

  document.getElementById('app').innerHTML = state.name;
})

var currentState = store.getState();

console.log(currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
