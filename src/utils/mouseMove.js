export function getMouseMove(e){
  const cursorEffect = document.querySelector(".cursor-effect");
  cursorEffect.style.left = e.clientX + "px";
  cursorEffect.style.top = e.clientY + "px";
}