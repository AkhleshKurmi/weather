const apiKey = "dfa1b224928489944e9b09e65e5ade1a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox= document.querySelector(".search input");
const  searchBtn= document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
    if(response.status == 404){
        const error =document.querySelector('.error')
        error.style.display="block"
        const weatherDisplay = document.querySelector(".weather")
        weatherDisplay.style.display ="none"
    }
else{
    var data = await response.json();
    console.log(data);


var city = document.querySelector(".city");

city.innerHTML = data.name;


const temp = document.querySelector(".temp");

temp.innerHTML = Math.round(data.main.temp) + " °C";


var humidity = document.querySelector(".humidity");

humidity.innerHTML = data.main.humidity + "%";

var wind = document.querySelector(".wind");

wind.innerHTML = data.wind.speed + " km/h";
console.log("img",data.weather[0].main)

 var imagesrc=data.weather[0].main;

const image = document.querySelector(".weather-icon");

 image.src= `images/${imagesrc}.png`;

 const weatherCondition = document.querySelector(".weatherName");
  weatherCondition.innerHTML=data.weather[0].main;

  const weatherDisplay = document.querySelector(".weather")
  weatherDisplay.style.display ="block"

  const error =document.querySelector('.error')
  error.style.display="none"

} 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


