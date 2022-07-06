// $(document).ready(function() {

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');




button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&q='+input.value+'&appid=e81f549631dcae90bcb32f401f3a04c1')
.then(response => response.json())
.then(data => {
    https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=&appid=fa5d675db8ac806ab936d2ccd4eb0ef2
 
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var humValue = data['main']['humidity']
  var windValue = data['wind']['speed']
  var icon = data['weather']['icon'];
//   var icon = data['main']['icon']

 

   main.innerHTML = nameValue + " (" + moment().format("MM/DD/YYYY") + ") ";
//   desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  humidity.innerHTML = "Humidity: " + humValue + "%";
  wind.innerHTML = "Wind Speed: " + windValue + " MPH";
  input.value ="";

})

// .catch(err => alert("Wrong city name!"));
})



