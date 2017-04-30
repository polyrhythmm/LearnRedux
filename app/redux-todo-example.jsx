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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});

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


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'play'
});
