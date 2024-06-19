const button = document.querySelector(".weather-button");
const inputBox = document.querySelector(".city-box");
const weatherOutput = document.querySelector(".weather-display");
const tempOutput = document.querySelector(".temp-display");

let api_key = `522bde66bda7a301c461964248b70158`;
let city = 'lahore';

function fetcher(inputCity) {
    city = inputCity;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    fetch(API)
        .then(function(res) {
            if(res.ok) {
                console.log("City Found");
            }
            else {
                console.log("City Not Found");
            }
            return res.json();
        })
        .then(function(data) {
            let weather = data.weather[0]
            let type = weather.main
            let temperature = data.main.temp;
            temperature =  temperature - 273.15;
            temperature = temperature.toFixed(2);
            
            weatherOutput.innerHTML =  "Weather: " + type;
            tempOutput.innerHTML =  "Temperature: " + temperature;
        })
        .catch(function(err) {
            console.log(err);
        });
}

button.addEventListener(`click`, () => {
    let inputBoxCity = inputBox.value
    fetcher(inputBoxCity);
})

