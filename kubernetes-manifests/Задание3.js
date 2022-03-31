navigator.geolocation.getCurrentPosition(success, error, {
 
    enableHighAccuracy: true
  })
  
  function success({ coords }) {

    const { latitude, longitude } = coords
    const position = [latitude, longitude]
    console.log(position) 
  }
  
  function error({ message }) {
    console.log(message) }