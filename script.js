const cityNameInput = $('#cityName')
const searchForm = $('#search-form')
const currentCond = $('#current-forecast #conditions')
const currentCondHeader = $('#current-forecast h3')
const dailyForecast = $('daily-forecast')
const fiveDayHeader = $('five-day')

const callOpenWeather = (city) => {

  const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=e81f549631dcae90bcb32f401f3a04c1"
  fetch(requestUrl)
  .then(function (response){
    if(!response.ok) {
      currentCond.innerHtml = ""
      currentCondHeader.innerHtml = "Try again!"
      const errorText = document.createElement("li")
      errorText.textContent = "City not found.";
      currentCond.appendChild(errorText);







    }
  })
}





function getApi(requestUrl) {
  fetch(requestUrl)
  .then(response => response.json())
  .then(data => console.log(data));
}


getApi(requestUrl);
