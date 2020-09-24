class Application {
  constructor() {
    console.log('app::init')

    this.dom = {
      circle: document.querySelector('.circle')
    }

    this.addListeners()
  }

  addListeners() {
    /**
     * click
     * mousemove
     * mousedown
     * mouseup
     * mouseenter
     * mouseleave
     * 
     * scroll
     * resize
     */
    this.dom.circle.addEventListener('mouseenter', this.onMouseEnter)
    this.dom.circle.addEventListener('mouseleave', this.onMouseLeave)
  }

  setRandomColor() {
    this.dom.circle.style.backgroundColor = `#000`// change la couleur de manière aleatoire
  }

  clearColor() {
    this.dom.circle.style.backgroundColor = ''
  }

  onMouseEnter = (e) => {
    console.log('circle enter')
    this.setRandomColor()
  }
  
  onMouseLeave = (e) => {
    console.log('circle leave')
    this.clearColor()
  }
}

new Application()