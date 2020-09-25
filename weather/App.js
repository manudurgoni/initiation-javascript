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

    const city = this.dom.cityInput.value
    this.getWeatherByCity(city)
  }

  async getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31e6e989590a80e12446183d2fc1d332&units=metric`

    let response = await fetch(url)
    let json = await response.json()

    console.log(json)
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid=31e6e989590a80e12446183d2fc1d332
  }
  
}


new App()