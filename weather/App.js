class App {
  constructor() {
    console.log('app')
    this.dom = {
      cityInput: document.querySelector('#city'),
      form: document.querySelector('.weather-form')
    }

    this.addListeners()
  }

  addListeners() {
    this.dom.form.addEventListener('submit', this.onSubmit)
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.dom.cityInput.value)
  }
  
}


new App()