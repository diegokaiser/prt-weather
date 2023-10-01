import icoCloudy from './../assets/images/ico_cloudy.svg'
import icoPartlyCloudy from './../assets/images/ico_partly_cloudy.svg'
import icoRainy from './../assets/images/ico_rainy.svg'
import icoRainyCloudy from './../assets/images/ico_rainy_cloudy.svg'
import icoSunny from './../assets/images/ico_sunny.svg'

export default function useSwitcher(howIsWeather) {
  switch(howIsWeather) {
    case 'Partly cloudy':
      return `${icoPartlyCloudy} `
    case 'Overcome':
      return `${icoPartlyCloudy} `
    case 'Mist':
      return `${icoCloudy} `
    case 'Cloudy':
      return `${icoCloudy} `
    case 'Rainy':
      return `${icoRainy} `
    case 'Patchy rain possible':
      return `${icoRainyCloudy} `
    case 'Rainy Cloudy':
      return `${icoRainyCloudy} `
    case 'Sunny':
      return `${icoSunny} `
    case 'Clear':
      return `${icoSunny} `
    default:
      return ':('
  }
}