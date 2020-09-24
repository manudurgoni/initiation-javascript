const h1 = document.querySelector('h1')
console.log(h1)

h1.classList.toggle('my-title')

const second = 3
window.setTimeout(() => {
  h1.classList.toggle('my-title')
}, second * 1000)

const allParagraphs = document.querySelectorAll('p')
console.log(allParagraphs)

// Ajouter une classe aux element qui ont un index pair
for(let i = 0; i < allParagraphs.length; i++) {
  const el = allParagraphs[i]
  console.log(el)
  // On teste si l'index est pair
  if (i % 2 === 0) {
    el.classList.add('even-paragraph')
  }
}