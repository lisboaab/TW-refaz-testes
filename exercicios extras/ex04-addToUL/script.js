const elementDiv = document.getElementById("list-app");

// Create the necessary elements
const list = document.createElement("ul");
list.setAttribute("id", "item-list"); // Adiciona um id para a lista
const input = document.createElement("input");
input.setAttribute("type", "text"); // Adiciona o parametro de tipo para o input
const addButton = document.createElement("button");
addButton.innerHTML = "Create New";

// Adiciona a lista à div app
elementDiv.appendChild(list);
elementDiv.appendChild(input);
elementDiv.appendChild(addButton);

// Add event listeners to the elements
addButton.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.innerHTML = input.value;
    list.appendChild(newItem);
});

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const text = prompt("Enter new text:");
        event.target.innerHTML = text;
    }
});
