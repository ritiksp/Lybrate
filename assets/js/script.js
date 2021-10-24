    
    
    // var url = 'https://openweathermap.org/data/2.5/widgets/weather?id=1275665&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02&callback=jQuery341047968923366183613_1634963804572&_=1634963804573';
    
 
    fetch('https://openweathermap.org/data/2.5/widgets/weather?id=1275665&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02').then(function(response) {
      return response.json();
    }).then(function(data) {
    
      console.log(data);

    document.getElementById("temprature").innerHTML=data.main.temp;

    document.getElementById("humid").innerHTML=data.main.humidity;

    document.getElementById("pressure").innerHTML=data.main.pressure;

    document.getElementById("nweather").innerHTML=data.weather[0].main;

    document.getElementById("dweather").innerHTML=data.weather[0].description;

    document.getElementById("windspeed").innerHTML=data.wind.speed;

    document.getElementById("lon").innerHTML=data.coord.lon;

    document.getElementById("lat").innerHTML=data.coord.lat;

    }).catch(function() {
      console.log("Booo");
    });

    // $.get("https://openweathermap.org/data/2.5/widgets/weather?id=1275665&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02&callback=jQuery341047968923366183613_1634963804572&_=1634963804573", function(coord, weather){
    //     alert("Data: " + coord + "\nStatus: " + weather);
    //   });

    //   var jqxhr = $.get( "https://openweathermap.org/data/2.5/widgets/weather?id=1275665&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02&callback=jQuery341047968923366183613_1634963804572&_=1634963804573", function() {
    //     alert( "success" );
    //   })
    //     .done(function() {
    //       alert( "second success" );
    //     })
    //     .fail(function() {
    //       alert( "error" );
    //     })
    //     .always(function() {
    //       alert( "finished" );
    //     });