for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
  box.style.backgroundColor = "red";
  box.style.color = "white";
  box.style.fontSize = "1.5em";
  box.style.textShadow = "1pxx 1px 2px rgba(0,0,0,0.2)";
}

const button = document.querySelector("#random-button");
const randomColorBlock = document.querySelectorAll(".box");

const randomHexCode = () => {
  const chars = "0123456789abcdef";
  const colorLength = 6;
  let color = "";

  for (let i = 0; i < colorLength; i++) {
    const randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
};

const addColor = () => {
  randomColorBlock.forEach((element) => {
    const newColor = randomHexCode();
    element.style.backgroundColor = newColor;
    element.innerHTML = newColor;
  });
};
