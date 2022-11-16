import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// load content
window.addEventListener("load", () => {
  // remove loading screen
  setTimeout(() => {
    document.querySelector("#loading").classList.add("page-loaded");
    setTimeout(() => {
      document.querySelector("#loading").classList.add("hide");
      document.querySelector("#loading").classList.remove("page-loaded");
    }, 1000);
  }, 3000);

  // move cursor
  const cursor = document.querySelector("#cursor");
  window.addEventListener("mousemove", function (e) {
    let xPos = e.pageX;
    let yPos = e.pageY;
    cursor.setAttribute("style", `left:${xPos}px; top:${yPos}px`);
  });
});

// render react content
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
