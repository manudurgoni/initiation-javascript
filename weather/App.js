class App {
  constructor() {
    console.log('app')
    this.hasResult = false
    this.dom = {
      error: document.querySelector('.error'),
      cityInput: document.querySelector('#city'),
      result: document.querySelector('.result'),
      form: document.querySelector('.weather-form')
    }

    this.addListeners()
    console.log(this)
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

    if (json.cod === '404') {
      this.dom.error.classList.remove('none')
      this.dom.result.classList.add('hidden')
      return
    }
    
    this.setDataToHTML(json)
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid=31e6e989590a80e12446183d2fc1d332
  }

  setDataToHTML(json) {
    this.dom.error.classList.add('none')
    const cityEl = this.dom.result.querySelector('h2')
    const currentTempEl = this.dom.result.querySelector('.temperature__current')
    const maxTempEl = this.dom.result.querySelector('.temperature__max')
    const minTempEl = this.dom.result.querySelector('.temperature__min')

    cityEl.innerHTML = json.name
    currentTempEl.innerHTML = `Température <strong>${json.main.temp}°</strong>`
    maxTempEl.innerHTML = `Max <strong>${json.main.temp_max}°</strong>`
    minTempEl.innerHTML = `Min <strong>${json.main.temp_min}°</strong>`

    if (!this.hasResult) {
      gsap.to(this.dom.result, {
        autoAlpha: 1
      })
      this.hasResult = true
    }

    gsap.from([cityEl,currentTempEl,minTempEl, maxTempEl], {
      y: 40,
      autoAlpha: 0,
      stagger: 0.05,
      ease: Expo.easeOut
    })
  }
  
}


new App()