let Increment = document.querySelector(".increment");
let Decrement = document.querySelector(".decrement");
let Reset = document.querySelector(".reset");
let h1 = document.querySelector("h1");

const store = Redux.createStore(reducer);

function reducer(state = 0, action) {
  if (action.type === "inc") {
    return state + 1;
  } else if (action.type === "dec") {
    return state - 1;
  } else if (action.type === "reset") {
    return 0;
  } else return state;
}

Increment.addEventListener("click", () => {
  store.dispatch({ type: "inc" });
  h1.innerText = store.getState();
});
Decrement.addEventListener("click", () => {
  store.dispatch({ type: "dec" });
  h1.innerText = store.getState();
});
Reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
  h1.innerText = store.getState();
});

h1.innerText = store.getState();
