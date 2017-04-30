var redux = require('redux');

console.log('starting redux exmaple');

//Name reducer and action generators
//-----------------------------

var nameReducer = (state = "Anonymous", action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
    return state;
  }
}

var changeName = (name) => {
  return {
    type:"CHANGE_NAME",
    name: name
  }
}

//Hobby reducer and action generators
//---------------------------------
var addHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    hobby: hobby
  }
}

var removeHobby = (id) => {
  return {
    type: "REMOVE_HOBBY",
    id: id
  }
}

var nextHobbyId = 1;
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

//Movie reducer and action generators
//---------------------------------

var addMovie = (title, genre) => {
  return {
    type: "ADD_MOVIE",
    title: title,
    genre: genre
  }
}

var removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id: id
  }
}

var nextMovieId = 1;
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


store.dispatch(changeName("Andrew"));

store.dispatch(addHobby("Running"));

store.dispatch(addMovie("Terminator", "Action"));
store.dispatch(addMovie("The Cube", "Suspense"));
store.dispatch(addMovie("The Teenage Mutant Ninja Turtles", "Action"));


store.dispatch(removeHobby(1));

store.dispatch(removeMovie(1));
