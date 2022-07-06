var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var uvi = document.querySelector('.uvi');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
const dailyCardCon = document.querySelector("#daily-forecast")
const fiveDayHeader = document.querySelector("#five-day")




button.addEventListener('click', function(event){ 
    event.preventDefault()
fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&q='+input.value+'&appid=e81f549631dcae90bcb32f401f3a04c1')
.then(response => response.json())
.then(data => {
    
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var humValue = data['main']['humidity']
  var windValue = data['wind']['speed']
  const icon = ("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Weather icon'>")
//   var icon = data['main']['icon']

 

   main.innerHTML = nameValue + " (" + moment().format("MM/DD/YYYY") + ") " + icon;
//   desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+ Math.floor(tempValue);
  humidity.innerHTML = "Humidity: " + humValue + "%";
  wind.innerHTML = "Wind Speed: " +  Math.floor(windValue) + " MPH";
  input.value ="";
  let citySearched = JSON.parse(localStorage.getItem("cities"))
  cityPicked = $("").val().trim()
  localStorage.setItem("cities", JSON.stringify(citySearched))
  console.log(cityPicked);





fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,alerts&units=imperial&appid=e81f549631dcae90bcb32f401f3a04c1`)
.then(response => response.json())
.then(data => {

    var uviValue = data['current']['uvi']

    uvi.innerHTML = "Uvi Index: " + uviValue

    let dailyArray = [];

    dailyCardCon.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        
        var dailyCard = document.createElement("div");
        // Populates forecast data for each card. Uses index number + 1 to advance moment.js call from current date by one day (pulls dates for next 5 days after today)
        dailyCard.innerHTML = `
        <div class="p-2 m-2 card bg-info text-white">
            <h5>${moment().add(i + 1, "days").format("MM/DD/YYYY")}</h5>
            <ul id="conditions">
                <li><img src='https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png' alt="Weather icon" class="mx-auto"></li>
                <li>Temp: ${Math.floor(data.daily[i].temp.day)} &deg;F</li>
                <li>Humidity: ${data.daily[i].humidity}%</li>
            </ul>
        </div>`;

        // Pushes card into dailyArray to then be appended to container
        dailyArray.push(dailyCard);
    }

    fiveDayHeader.classList.remove("hidden");

                // Appends cards stored in dailyArray to container
                dailyArray.forEach(card => {
                    dailyCardCon.appendChild(card);
                })



})
})

// .catch(err => alert("Wrong city name!"));
})



