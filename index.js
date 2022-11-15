window.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  let [x, y] = [e.pageX, e.pageY];
  cursor.setAttribute("style", `top:${y}px; left:${x}px;`);
});
