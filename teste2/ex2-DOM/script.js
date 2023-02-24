// obtém os elementos HTML necessários
const container = document.getElementById('bearsContainer');
const dummyFigure = container.querySelector('.bearFigure');
const imageInput = document.getElementById('image');
const captionInput = document.getElementById('caption');
const insertButton = document.getElementById('insertBear');
const resetButton = document.getElementById('removeAllBears');

// adiciona evento de clique para o botão Insert Bear
insertButton.addEventListener('click', function() {
  // cria um novo elemento de figura
  const newFigure = document.createElement('figure');
  const newImage = document.createElement('img');
  const newCaption = document.createElement('figcaption');
  newFigure.style.margin = "5px";
  newFigure.style.width = "200px";

  // define o valor do atributo src da imagem usando o valor do input Image
  newImage.src = imageInput.value;
  
  // define o texto do elemento de legenda usando o valor do input Caption e define o estilo dele
  newCaption.textContent = captionInput.value;
  newCaption.style.backgroundColor = 'red';
  newCaption.style.color = 'white';
  newCaption.style.fontWeight = 'bold';
  newCaption.style.marginTop = "-5px"
  newCaption.style.padding = "2px";
  newCaption.style.display = "flex";
  newCaption.style.justifyContent = "center";


  // adiciona a imagem e a legenda ao elemento de figura
  newFigure.appendChild(newImage);
  newFigure.appendChild(newCaption);
  
  // adiciona o novo elemento de figura ao container
  container.appendChild(newFigure);
});

// adiciona evento de clique para o botão Reset
resetButton.addEventListener('click', function() {
  // remove todas as figuras criadas dinamicamente, exceto a figura dummy
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }
});
