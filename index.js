let currentTime = new Date();
    let h3 = document.querySelector("h3")
    let hours = currentTime.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
    
let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }   
       
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[currentTime.getDay()];
    h3.innerHTML = `${day} ${hours}:${minutes}`;

        
let form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
       


function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
    );
}

function searchCity(city) {
  let apiKey = "794b84783e9d181bfed9b6145a7885c4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName").value;
  searchCity(city);
}
        
        