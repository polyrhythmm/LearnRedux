var redux = require('redux');

console.log('starting redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action ) => {

  console.log('New action', action);
  switch(action.type)
  {
    case "CHANGE_NAME":
        return {
          ...state,
          name: action.name
        };

    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };

    default:
      return state;
  }
}

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log(currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'rad'
});

console.log('Name should be Andrew', store.getState())
