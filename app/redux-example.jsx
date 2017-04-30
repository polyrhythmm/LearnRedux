var redux = require('redux');

console.log('starting redux exmaple');

var stateDefault = {
  name: 'John',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = "Anonymous", action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
    return state;
  }
}

var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_HOBBY":
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case "REMOVE_HOBBY" :
      return state.filter((hobby) => hobby.id !== action.id);

    default:
      return state;
  }
}

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_MOVIE" :
      return   [
          ...state,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]

    case "REMOVE_MOVIE" :
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  name : nameReducer,
  hobbies : hobbiesReducer,
  movies : moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to CHANGE_NAME
store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);

  document.getElementById('app').innerHTML = state.name;

  console.log(store.getState());
})

var currentState = store.getState();

console.log(currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Terminator',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Cube',
  genre: 'Suspense'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Teenage Mutant Ninja Turtles',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
