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

    this.size = {
      circle: this.dom.circle.offsetWidth
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

    window.addEventListener('resize', this.onResize)
    window.addEventListener('mousemove', this.onMouseMove)

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

    const maxX = (this.screen.width - this.size.circle)
    this.position.x = Math.min(this.position.x, maxX)
  }
  goUp() {
    this.position.y -= 100

    const minY = 0
    this.position.y = Math.max(this.position.y, minY)
  }
  goDown() {
    this.position.y += 100

    const maxY = (this.screen.height - this.size.circle)
    this.position.y = Math.min(this.position.y, maxY)
  }

  move() {
    // this.dom.circle.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`
    gsap.to(this.dom.circle, {
      x: this.position.x,
      y: this.position.y,
      duration: 2.5,
      ease: Elastic.easeOut.config( 1, 0.3)
    })
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

  onMouseMove = (e) => {
    console.log('move', e)
    this.position.x = e.clientX - (this.size.circle * 0.5)
    this.position.y = e.clientY - (this.size.circle * 0.5)

    this.move()
  }
  
  onResize = () => {
    console.log('resize', window.innerWidth)
    this.screen.width = window.innerWidth
    this.screen.height = window.innerHeight

    this.size = {
      circle: this.dom.circle.offsetWidth
    }
  }
}

new Application()