let api_key = `522bde66bda7a301c461964248b70158`;
let city = 'lahore';
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
        temperature =  temperature - 273.15
        console.log(type);
        console.log(temperature);
    })
    .catch(function(err) {
        console.log(err);
    });