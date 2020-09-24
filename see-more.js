// Creer mes 3 paragraphes
const feed = document.querySelector('.feed')
const div = document.createElement('div')
div.innerHTML = `
  <p>Voluptate sit reprehenderit proident magna et excepteur. Occaecat minim commodo enim nisi ex est officia consequat elit. Occaecat mollit commodo duis incididunt minim esse culpa mollit qui culpa dolor. Do aliqua qui aute consequat sunt dolore veniam est ullamco enim.</p>

  <p >Dolore reprehenderit mollit cupidatat qui irure anim dolor. Commodo eiusmod enim fugiat magna cillum qui consectetur mollit nostrud nostrud est mollit officia. Qui minim est excepteur anim consequat ullamco enim tempor fugiat. Id esse ipsum dolore sunt anim culpa laboris duis duis. Ad nulla mollit ut dolore veniam incididunt nostrud exercitation. Lorem aliqua in dolore pariatur. Ipsum amet labore tempor aute nulla ex esse commodo.</p>

  <p>Fugiat enim nostrud ea dolor excepteur id veniam cupidatat exercitation. Lorem pariatur adipisicing anim exercitation pariatur Lorem esse esse occaecat nisi eiusmod adipisicing reprehenderit excepteur. Velit voluptate dolore eu non est aute incididunt sunt fugiat. Pariatur ex Lorem exercitation mollit deserunt elit. Tempor ad laboris officia enim tempor cupidatat nulla. Nostrud anim cillum sint nostrud aliquip consequat sit. Adipisicing fugiat eiusmod tempor occaecat deserunt velit dolore.</p>
`

const button = document.querySelector('.see-more')
const button2 = document.querySelector('.see-less')


const createParagraph = (parent) => {
  const p = document.createElement('p')
  p.innerHTML = 'Fugiat enim nostrud ea dolor excepteur id veniam cupidatat exercitation. Lorem pariatur adipisicing anim exercitation pariatur Lorem'
  parent.appendChild(p)
}

// Au click on ajouter un article
button.addEventListener('click', (event) => {
  createParagraph(feed)
  button.style.transform = `translate(${Math.random() * 200}px, ${Math.random() * 200}px)`
})

// Au click on supprime un article
button2.addEventListener('click', (event) => {
  const allParagraphs = feed.querySelectorAll('p')
  const lastElement = allParagraphs[allParagraphs.length - 1]
  if (lastElement) {
    feed.removeChild(lastElement)
  }
})
