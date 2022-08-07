let weather = {
    "apiKey" : "9ab82efaaa04a155296bc934c8a5d1a2",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=champaign&units=imperial&appid=9ab82efaaa04a155296bc934c8a5d1a2"
        ).then((response) => response.json())
        .then((data) => console.log(data))
    }
}