
import { getMap } from './Задание3.js'


document.getElementById('my_position').onclick = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
}

function success({ coords }) {
  const { latitude, longitude } = coords
  const currentPosition = [latitude, longitude]
 
  getMap(currentPosition, 'You are here')
}

function error({ message }) {
  console.log(message)
}