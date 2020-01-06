let Inc = document.querySelector(".increment");
let Dec = document.querySelector(".decrement");
let Res = document.querySelector(".reset");
let h1 = document.querySelector("h1");
let Five = document.querySelector(".plusfive");
let Eight = document.querySelector(".pluseight");
let Ten = document.querySelector(".plusten");
let Twelve = document.querySelector(".plustwelve");
let Fourteen = document.querySelector(".plusfourteen");
let Sixteen = document.querySelector(".plussixteen");

const store = Redux.createStore(reducer);
console.log(store);

function reducer(state = 0, action) {
  switch (action.type) {
    case "Increment":
      if (state >= 100) {
        alert("Please Put Values Under 100");
        return state;
      } else {
        return state + action.payload;
      }
    case "Decrement":
      if (state <= -0) {
        alert("Values Below 0 are not allowed");
        return state;
      } else {
        return state - action.payload;
      }
    case "res":
      return (state = 0);
    default:
      return state;
  }
}

let number = 1;

function Increase(number) {
  return store.dispatch({ type: "Increment", payload: number });
}

function Decrease(number) {
  return store.dispatch({ type: "Decrement", payload: number });
}

Inc.addEventListener("click", () => Increase(number));
Dec.addEventListener("click", () => Decrease(number));
Res.addEventListener("click", () => {
  store.dispatch({ type: "res" });
});

Five.addEventListener("click", () => (number = 5));
Eight.addEventListener("click", () => (number = 8));
Ten.addEventListener("click", () => (number = 10));
Twelve.addEventListener("click", () => (number = 12));
Fourteen.addEventListener("click", () => (number = 14));
Sixteen.addEventListener("click", () => (number = 16));

h1.innerText = store.getState();
store.subscribe(() => {
  h1.innerText = store.getState();
});
