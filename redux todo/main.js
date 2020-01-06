const input = document.querySelector("#new-task");
const ul = document.createElement("ul");

let store = Redux.createStore(Reducer);

function Reducer(state = [], action) {
  switch (action.type) {
    case "addTodo":
      return state.concat(action.value);
    case "removeTodo":
      return state.slice(action.value);
    default:
      return state;
  }
}


function handleSubmit(){
    if((event.keycode === 13) && (event.target.value.trim() !== ""))
}