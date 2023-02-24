const firtstLi = document.querySelectorAll("li:first-child")
const lastsLi = document.querySelectorAll("li:last-child")

firtstLi.forEach((li) => (li.innerHTML = "first"));

lastsLi.forEach((li) => (li.innerHTML = "last"));