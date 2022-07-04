const cityNameInput = $('#cityName')
const searchForm = $('#search-form')
var city = "florida"


const callOpenWeather = (city) => {

  const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=e81f549631dcae90bcb32f401f3a04c1"
  fetch(requestUrl)
  .then(function (response){
    if(!response.ok) {
      

    }
  })
}





function getApi(requestUrl) {
  fetch(requestUrl)
  .then(response => response.json())
  .then(data => console.log(data));
}


getApi(requestUrl);
