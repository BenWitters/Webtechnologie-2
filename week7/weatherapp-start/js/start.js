/*global  $, Skycons*/
// zelf opstartende anonieme functie, (om conflicten te vermijden) -> functie zou al kunnen bestaan 
// functie aanroepen: haken rond functie zetten en na de functie () = uitvoeren
(function () {
    // use strict: je kan geen variabele gebruiken als deze niet gedeclareert is
    'use strict';
    // json object bestaat uit properties
    var App = {   // javascript object , locatie opvragen, weer opvragen
        APIKEY: "93794a2c0e78540c50f76caac9487d6b",
        //
        lat: "",
        lng: "",
        
        init: function () {
            // kickstart the app
            App.getLocation();
        },
        
        getLocation: function () {
            // get the current user posisition
            navigator.geolocation.getCurrentPosition(App.foundPosition); // app. binnen de app functie
        },
        
        // krijgen een object met latitude en longitude
        foundPosition: function (pos) {
            // found the current user position
            // lat en lng 
            App.lat = pos.coords.latitude;
            App.lng = pos.coords.longitude;
            App.getWeather();
        },
        
        getWeather: function () {
            // get current weather for location
            var url = "https://api.forecast.io/forecast/" + App.APIKEY + "/" + App.lat + "," + App.lng;
            
            //JSONP (niet aan ander domain name data gaan vragen(cross domain) (enige manier voor iets van een ander domein te krijgen : script tag)
            // request doen als script (als  je niets meegeeft is het standaard request get)
            window.jQuery.ajax({
                url: url,
                dataType: "jsonp",
                success: function (data) {
                    var currentSummary = data.currently.summary;
                    var currentTemperature = Math.round((data.currently.temperature - 32) * 5/9);

                    $('.weather-summary').text(currentSummary);
                    $('.weather-temperature').text(currentTemperature + "°C");
                    // display skycons
                    var skycons = new Skycons({"color": "white"});
                    // add canvas by ID...
                    switch(currentSummary){

                        case "Clear": skycons.add("weather-icon", Skycons.CLEAR_DAY); break;
                        case "Light Rain": skycons.add("weather-icon", Skycons.RAIN); break;
                        case "Partly Cloudy": skycons.add("weather-icon", Skycons.PARTLY_CLOUDY_DAY); break;
                        case "Mostly Cloudy": skycons.add("weather-icon", Skycons.CLOUDY); break;



                    }

                    // start animation!
                    skycons.play();
                }
            });
            
        }
    };
    // oproepen vna init function
    App.init();
    
}());