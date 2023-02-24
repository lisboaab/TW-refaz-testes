// Get the paragraph element
const paragraph = document.querySelector('p');

// Split the text into an array of words
const words = paragraph.textContent.trim().split(/\s+/);

// Filter the words array to include only words over 8 characters long
const longWords = words.filter(word => word.length > 8);

// Loop through the longWords array and highlight each word
longWords.forEach(word => {
  paragraph.innerHTML = paragraph.innerHTML.replace(
    new RegExp(word, 'g'),
    `<span style="background-color: yellow"> ${word} </span>`
  );
});
