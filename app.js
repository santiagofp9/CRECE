// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0


//SELECT ELEMENTOS

const iconElement= document.querySelector(".weather-icon");
const tempElement= document.querySelector(".temperature-value p");
const desElement= document.querySelector(".temperature-description p");
const locationElement= document.querySelector(".location p");
const notificationElement= document.querySelector(".notification");

//App Data

const weather={};

weather.temperature={
    unit:"celsius"
}

//APP CONSTANTES Y VARIABLES
const KELVIN =273;
//API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// verificar si el buscar soporta geoloalizacion
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,ShowError);
}else{
    notificationElement.getElementsByClassName.display= "block";
    notificationElement.innerHTML = "<p> El buscador no soporta Geolocalizacion</p>";
}
    //set USER'S POSITION
    function setPosition(position){
        let latitude =position.coords.latitude;
        let longitude= position.coords.longitude;

        getWeather(latitude,longitude);
    }

    //MOSTRAR ERROR CUANDO HAYA ERROR DE GEOLOCALIZACION
function ShowError(error){
    notificationElement.getElementsByClassName.display= "block";
    notificationEleme.innerHTML = `<p> ${error.message} </p> `;
}

// obtener el clima desde la API
function  getWeather(latitude,longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather? 
    lat= ${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);

    fetch(api)
    .then(function(response){
        let data= response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp -KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.coutry= data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

//DISPLAY CLIMA PARA  UI

function displayWeather(){
    iconElement.innerHTML=`<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML=`${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML= weather.description;
    locationElement.innerHTML=`${weather.city}, ${weather.country}`;
}


