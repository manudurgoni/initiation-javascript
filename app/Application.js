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

  onMouseEnter = (e) => {
    console.log('circle enter')
  }
  
  onMouseLeave = (e) => {
    console.log('circle leave')
  }
}

new Application()