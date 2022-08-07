let weather = {
    "apiKey" : "9ab82efaaa04a155296bc934c8a5d1a2",

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, feels_like, humidity, speed);



        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = "Condition: " + description;
        document.querySelector(".feels").innerText = "Feels like: " + feels_like + "°F";
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";



    
    }
}