const cityNameInput = $('#cityName')
var city = "florida"






var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=e81f549631dcae90bcb32f401f3a04c1"


function getApi(requestUrl) {
  fetch(requestUrl)
  .then(response => response.json())
  .then(data => console.log(data));
}


getApi(requestUrl);
