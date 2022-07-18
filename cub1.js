
let cubeA = document.querySelector(".image-cubeA");
let btnNextA = document.getElementById("nextA");
let btnPrevA = document.getElementById("prevA");

let pos1 = 0;

btnNextA.addEventListener("click", () => {
  pos1 -= 90;
  cubeA.style.transform = `rotateY(${pos1}deg)`;
});
btnPrevA.addEventListener("click", () => {
  pos1 += 90;
  cubeA.style.transform = `rotateY(${pos1}deg)`;
});
