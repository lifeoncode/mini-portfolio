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
      // show header
      document.querySelector("#header").classList.add("page-loaded");
    }, 1000);
  }, 3000);

  // move cursor
  const cursor = document.querySelector("#cursor");
  window.addEventListener("mousemove", function (e) {
    let xPos = e.pageX;
    let yPos = e.pageY;
    cursor.setAttribute("style", `left:${xPos}px; top:${yPos}px`);
  });

  // when hovering on deco space
  const rightSpace = document.querySelector(".right-cover");
  rightSpace.addEventListener("mouseover", (e) => {
    cursor.classList.add("deco-space");
    cursor.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>';
  });

  rightSpace.addEventListener("mouseout", (e) => {
    cursor.classList.remove("deco-space");
    cursor.innerHTML = "";
  });

  // when hovering over text
  const text = document.querySelectorAll(".text");
  for (let i of text) {
    i.addEventListener("mouseover", (e) => {
      cursor.classList.add("highlight");
    });

    i.addEventListener("mouseout", (e) => {
      cursor.classList.remove("highlight");
    });
  }

  // work section hover
  const workImages = document.querySelectorAll(".work-img");
  workImages.forEach((image) => {
    image.addEventListener("mouseover", (e) => {
      cursor.classList.add("expand");
      cursor.innerHTML = "<span>work</span>";
    });

    image.addEventListener("mouseout", (e) => {
      cursor.classList.remove("expand");
      cursor.innerHTML = "";
    });
  });

  // buttons hover
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      cursor.classList.add("expand");
      cursor.classList.add("hide");
    });

    btn.addEventListener("mouseout", () => {
      cursor.classList.remove("expand");
      cursor.classList.remove("hide");
    });
  });

  // parallax work images
  window.addEventListener("scroll", (e) => {
    let scrollPosition = window.pageYOffset;

    if (window.screen.width > 800) {
      workImages.forEach((image) => {
        let scrollRate = image.dataset.rate * (scrollPosition / 4);
        image.style.transform = `translateY(${scrollRate}px)`;
      });
    }
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
