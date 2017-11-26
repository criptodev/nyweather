//Local Weather (key: 23b25477de35b802330ff617a5d15adf)

$(document).ready(function(){

  //Geolocation Ask
  var lat;
  var lon;
  //if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      $("#data").html("latitude: " + lat + "<br>longitude: " + lon);

      console.log();
      //Call the API
      var api = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=23b25477de35b802330ff617a5d15adf";
      //XMLHttpRequest explicacion:
      //Primero se crea una variable y en el se crea y llama al constructor XMLHttpRequest()
      var request = new XMLHttpRequest();
      //Luego se usa el metodo XMLHttpRequest.open(), El primer parametro es get o post
      //El segundo metodo el el link o source de la api, El tercer metodo es sí es Asyncrono o no.
      request.open('GET', api, true);
      //Si la conexion se establece pasar respuesta (JSON) a variable data
      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var data = JSON.parse(this.response);
          //probando
          console.log(data.name);
        } else {
          // We reached our target server, but it returned an error

        }
      };
      //Si hay error ejecutar esto
      request.onerror = function() {
        // There was a connection error of some sort
      };
      //Este metodo es el que marca la conexion con el servidor despues de especificar el onload
      request.send();

    });

  });