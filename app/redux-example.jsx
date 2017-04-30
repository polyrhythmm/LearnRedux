var redux = require('redux');
var axios = require('axios');
console.log('starting redux exmaple');

//Name
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//Subscribe to CHANGE_NAME
store.subscribe(() => {
  var state = store.getState();

  console.log(store.getState());

  if(state.map.isFetching)
  {
    document.getElementById('app').innerHTML = "loading...";
  } else if(state.map.url)
  {
      document.getElementById('app').innerHTML = "<a target='_blank' href=" + state.map.url+ ">See your location</a>"
  }
})

var currentState = store.getState();

console.log(currentState);


store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName("Andrew"));

store.dispatch(actions.addHobby("Running"));

store.dispatch(actions.addMovie("Terminator", "Action"));
store.dispatch(actions.addMovie("The Cube", "Suspense"));
store.dispatch(actions.addMovie("The Teenage Mutant Ninja Turtles", "Action"));


store.dispatch(actions.removeHobby(1));

store.dispatch(actions.removeMovie(1));
