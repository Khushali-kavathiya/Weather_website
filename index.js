let weather = {
    "apikey": "22f60a6da558d4fefeee13dd195fdaf8",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=matric&appid="
        + this.apikey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon, description,temp, humidity,speed)
        document.querySelector(".city").innerText = "Weather in " +name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
       console.log("des", description)
         //document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = description+'  '+temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity +"%";
        document.querySelector(".wind").innerText = "wind speed: "+speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document
.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();

});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Denver");

