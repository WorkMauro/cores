const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

function generateColors() {
  colorsDiv.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    // aqui é fora do curso, pois pensei em tentar captar o nome da classe pra fazer o control C
    colorDiv.classList.add("colors-child");
    const colorName = document.createElement("p");
    colorName.style.backgroundColor = color;
    colorName.textContent = color;
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
}
//aqui as divs recebem o evento da função que copia ou que deveria copiar a cor dela
colorsDiv.addEventListener("click", copiarCor);

// aqui defini uma constante para que eu possa posteriormente fazer um math random para gerar uma cor
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  // aqui defini que a cor recebe uma #
  let color = "#";

  for (let i = 0; i < 6; i++) {
    // aqui defini que minha nova variavel color recebe o que ela era antes + a randomização dos atributos na const letters
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateButton.addEventListener("click", generateColors);

// até aqui tudo funciona.
function copiarCor(event) {
  if (event.target.classList.contains("colors-child")) {
    const clickedDiv = event.target;
    const colorValue = window.getComputedStyle(clickedDiv).backgroundColor;
    navigator.clipboard.writeText(colorValue).then(
      () => {
        alert("Cor copiada para a área de transferência.");
      },
      (err) => {
        console.log("Erro ao copiar cor: ", err);
      }
    );
  }
}
