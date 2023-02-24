const fruitList = ["apple", "banana", "tomato"]
const ulToChange = document.querySelector("ul")   // 1o seleciona o aqruivo existente na pag HTML e coloca numa variavel

for (let i in fruitList) {
    const li = document.createElement("li");       //2o cria a tag do elemento q vai colocar
    var textoDaLista = fruitList[i];                
    const txt = document.createTextNode(textoDaLista);  //3o cria o elemento

    li.appendChild(txt);                            //4o add o elemento criado na tag criada
    ulToChange.appendChild(li);                     //5o add a tag criada na tag existente  no arquivo html

}