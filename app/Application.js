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

    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  }

  setRandomColor() {
    let randomColorR = 255 * Math.random()
    let randomColorG = 255 * Math.random()
    let randomColorB = 255 * Math.random()
    this.dom.circle.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`// change la couleur de manière aleatoire
  }

  clearColor() {
    this.dom.circle.style.backgroundColor = ''
  }

  onKeyDown = (e) => {
    if (this.isPress) return
    console.log(e.key)
    console.log(e.keyCode)

    this.isPress = true
  }
  
  onKeyUp = (e) => {
    this.isPress = false
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