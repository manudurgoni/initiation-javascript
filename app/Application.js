class Application {
  constructor() {
    console.log('app::init')
    this.isPress = false
    this.position = {
      x: 0,
      y: 0
    }

    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
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

  goLeft() {
    this.position.x -= 100
    
    const minX = 0
    this.position.x = Math.max(this.position.x, minX)
  }
  goRight() {
    this.position.x += 100

    const maxX = (this.screen.width - this.dom.circle.offsetWidth)
    this.position.x = Math.min(this.position.x, maxX)
  }
  goUp() {
    this.position.y -= 100

    const minY = 0
    this.position.y = Math.max(this.position.y, minY)
  }
  goDown() {
    this.position.y += 100

    const maxY = (this.screen.height - this.dom.circle.offsetHeight)
    this.position.y = Math.min(this.position.y, maxY)
  }

  move() {
    this.dom.circle.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`
  }

  onKeyDown = (e) => {
    if (this.isPress) return

    switch (e.keyCode) {
      case 37:
        // va à gauche
        this.goLeft()
        break;
      case 38:
        // va en haut
        this.goUp()
        break;
      case 39:
        // va à droite
        this.goRight()
        break;
      case 40:
        // va en bas
        this.goDown()
        break;
    }

    this.move()

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