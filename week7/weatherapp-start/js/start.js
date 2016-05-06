/*global  $, Skycons*/
// zelf opstartende anonieme functie, (om conflicten te vermijden) -> functie zou al kunnen bestaan
// functie aanroepen: haken rond functie zetten en na de functie () = uitvoeren
(function () {
    // use strict: je kan geen variabele gebruiken als deze niet gedeclareert is
    'use strict';
    // json object bestaat uit properties
    var App = {   // javascript object , locatie opvragen, weer opvragen
        APIKEY: "93794a2c0e78540c50f76caac9487d6b",
        GOOGLE_KEY: "AIzaSyAtqjBbSUUMEZc23Ww7OGbjqt7eKyAh3bQ",
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
            App.getAdress();
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
                    console.log(data);
                    var currentSummary = data.currently.summary;
                    var currentTemperature = Math.round((data.currently.temperature - 32) * 5/9);

                    function getTemp(dayNo){
                        var dailyTemp = Math.round((((data.daily.data[dayNo].apparentTemperatureMax + data.daily.data[dayNo].apparentTemperatureMin) / 2) -32) *5/9);
                        return dailyTemp + "°C"
                    }
                    $('.day1Temp').text(getTemp(1));
                    $('.day2Temp').text(getTemp(2));
                    $('.day3Temp').text(getTemp(3));
                    $('.day4Temp').text(getTemp(4));
                    $('.day5Temp').text(getTemp(5));
                    $('.day6Temp').text(getTemp(6));




                    $('.weather-summary').text(currentSummary);
                    $('.weather-temperature').text(currentTemperature + "°C");
                    // display skycons
                    var skycons = new Skycons({"color": "white"});
                    // add canvas by ID...
                    switch(currentSummary.toLowerCase()){
                        case "cloudy": skycons.add('weather-icon', Skycons + '.' + icon); break;
                        case "partly cloudy": skycons.add('weather-icon', Skycons.PARTLY_CLOUDY_DAY); break;
                        case "mostly cloudy": skycons.add('weather-icon', Skycons.PARTLY_CLOUDY_DAY); break;
                        case "clear": skycons.add('weather-icon', Skycons.CLEAR_DAY); break;
                        case "clear night": skycons.add('weather-icon', Skycons.CLEAR_NIGHT); break;
                        case "light rain": skycons.add('weather-icon', Skycons.RAIN); break;
                        case "rain": skycons.add('weather-icon', Skycons.RAIN); break;
                        case "snow": skycons.add('weather-icon', Skycons.SNOW); break;
                        case "sleet": skycons.add('weather-icon', Skycons.SLEET); break;
                        case "wind": skycons.add('weather-icon', Skycons.WIND); break;
                        case "fog": skycons.add('weather-icon', Skycons.FOG); break;
                        case "drizzle": skycons.add('weather-icon', Skycons.RAIN); break;

                    }
                    skycons.play();
                }
            });

        },
        getAdress: function(){
            var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ App.lat + "," + App.lng + "&key=" + App.GOOGLE_KEY;

            window.jQuery.ajax({
                url: googleUrl,
                success: function (data) {
                    var city = data.results[1].address_components[0].short_name;
                    $('#location').text(city);

                }
            })
        }
    };
    // oproepen vna init function
    App.init();


}());
