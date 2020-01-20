$(document).ready(function(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&lang=es&units=metricv&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
        datatype : "json",
        type: "GET",

        success: function(respuesta) {
          console.log(respuesta);
          var timestamp = moment.unix(respuesta.list[0].dt);
         
          console.log(respuesta.rain1h);
          $("#fecha").html( timestamp.format('dddd Do ')+ "<br>" );
          $("#temp").html("temperatura" +" " + Math.round(respuesta.list[0].main.temp) + "º" + "<br>" );
          $("#tempmin").html("temperatura minima" + " " + Math.floor(respuesta.list[0].main.temp_min) + "º" + "<br>");
          $("#tempmax").html("temperatura maxima" + " " + Math.round(respuesta.list[1].main.temp_max) + "º" + "<br>");       
          $("#speed").html("Velocidad del viento" + " " + respuesta.list[0].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes").html("Nubosidad" + " " + respuesta.list[0].clouds.all + "%" + "<br>");
                    
          lluvia=(respuesta.list[0].rain3h)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia").html("No hay pronosticos de Lluvia")
                }else{
                  $("#lluvia").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[0].snow3h)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve").html("No hay pronosticos de Nieve")
                }else{
                  $("#nieve").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
                }
               
          
    },
        error: function(jqXHR, textStatus, errorThrown){
          console.log("ERROR :  " + errorThrown);
        }

        
      });

  });

//////////////////////////COMIENZA EL DIA 2////////////////////////////////////////////

  $(document).ready(function(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&lang=sp&units=metric&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
        datatype : "json",
        type: "GET",

        success: function(respuesta) {
          console.log(respuesta);
          var timestamp = moment.unix(respuesta.list[10].dt);
          $("#fecha2").html(timestamp.format('dddd Do ') + "<br>" );
          $("#temp2").html("temperatura" +" " + Math.round(respuesta.list[10].main.temp) + "º" + "<br>" );
          $("#tempmin2").html("temperatura minima" + " " + Math.floor(respuesta.list[5].main.temp_min) + "º" + "<br>");
          $("#tempmax2").html("temperatura maxima" + " " + Math.round(respuesta.list[9].main.temp_max) + "º" + "<br>");       
          $("#speed2").html("Velocidad del viento" + " " + respuesta.list[10].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes2").html("Nubosidad" + " " + respuesta.list[10].clouds.all + "%" + "<br>");
          
          
          lluvia=(respuesta.list[10].rain3h)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia2").html("No hay pronosticos de Lluvia")
                }else{
                  $("#lluvia2").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[10].snow3h)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve2").html("No hay pronosticos de Nieve")
                }else{
                  $("#nieve2").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
                }
               
          
    },
        error: function(jqXHR, textStatus, errorThrown){
          console.log("ERROR :  " + errorThrown);
        }

        
      });

  });

  //////////////////////////////COMIENZA EL DIA 3///////////////////////////////////////


  $(document).ready(function(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&units=metric&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
        datatype : "json",
        type: "GET",

        success: function(respuesta) {
          console.log(respuesta);
          var timestamp = moment.unix(respuesta.list[18].dt)
          $("#fecha3").html(timestamp.format('dddd Do ') + "<br>" );
          $("#temp3").html("temperatura" +" " + Math.round(respuesta.list[18].main.temp)+ "º" + "<br>" );
          $("#tempmin3").html("temperatura minima" + " " + Math.floor(respuesta.list[13].main.temp_min) + "º" + "<br>");
          $("#tempmax3").html("temperatura maxima" + " " + Math.round(respuesta.list[17].main.temp_max) + "º" + "<br>");       
          $("#speed3").html("Velocidad del viento" + " " + respuesta.list[18].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes3").html("Nubosidad" + " " + respuesta.list[18].clouds.all + "%" + "<br>");
                    
          lluvia=(respuesta.list[18].rain)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia3").html("No hay pronosticos de Lluvia")
                }else{
                  $("#lluvia3").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[18].snow)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve3").html("No hay pronosticos de Nieve")
                }else{
                  $("#nieve3").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
                }
               
          
    },
        error: function(jqXHR, textStatus, errorThrown){
          console.log("ERROR :  " + errorThrown);
        }

        
      });

  });


    //////////////////////////////COMIENZA EL DIA 4///////////////////////////////////////




    $(document).ready(function(){
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&units=metric&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
          datatype : "json",
          type: "GET",
  
          success: function(respuesta) {
            console.log(respuesta);
            var timestamp = moment.unix(respuesta.list[26].dt)
            $("#fecha4").html(timestamp.format('dddd Do ') + "<br>" );
            $("#temp4").html("temperatura" +" " + Math.round(respuesta.list[26].main.temp)+ "º" + "<br>" );
            $("#tempmin4").html("temperatura minima" + " " + Math.floor(respuesta.list[21].main.temp_min) + "º" + "<br>");
            $("#tempmax4").html("temperatura maxima" + " " + Math.round(respuesta.list[25].main.temp_max) + "º" + "<br>");       
            $("#speed4").html("Velocidad del viento" + " " + respuesta.list[26].wind.speed +" "+ "m/h" + "<br>");
            $("#nubes4").html("Nubosidad" + " " + respuesta.list[26].clouds.all + "%" + "<br>");
                      
            lluvia=(respuesta.list[26].rain3h)
            console.log(lluvia);
            if (lluvia==undefined){ 
             $("#lluvia4").html("No hay pronosticos de Lluvia")
                  }else{
                    $("#lluvia4").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                  }
  
                   
            nieve=(respuesta.list[26].snow3h)
            console.log(lluvia);
            if (nieve==undefined){
             $("#nieve4").html("No hay pronosticos de Nieve")
                  }else{
                    $("#nieve4").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
                  }
                 
            
      },
          error: function(jqXHR, textStatus, errorThrown){
            console.log("ERROR :  " + errorThrown);
          }
  
          
        });
  
    });

 //////////////////////////////COMIENZA EL DIA 5 ///////////////////////////////////////

 
 $(document).ready(function(){
  $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&units=metric&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
      datatype : "json",
      type: "GET",

      success: function(respuesta) {
        console.log(respuesta);
        var timestamp = moment.unix(respuesta.list[34].dt)
        $("#fecha5").html(timestamp.format ('dddd Do ') + "<br>" );
        $("#temp5").html("temperatura" +" " + Math.round(respuesta.list[34].main.temp)+ "º" + "<br>" );
        $("#tempmin5").html("temperatura minima" + " " + Math.floor(respuesta.list[29].main.temp_min) + "º" + "<br>");
        $("#tempmax5").html("temperatura maxima" + " " + Math.round(respuesta.list[33].main.temp_max) + "º" + "<br>");       
        $("#speed5").html("Velocidad del viento" + " " + respuesta.list[34].wind.speed +" "+ "m/h" + "<br>");
        $("#nubes5").html("Nubosidad" + " " + respuesta.list[34].clouds.all + "%" + "<br>");
                  
        lluvia=(respuesta.list[34].rain3h)
        console.log(lluvia);
        if (lluvia==undefined){ 
         $("#lluvia5").html("No hay pronosticos de Lluvia")
              }else{
                $("#lluvia5").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
              }

               
        nieve=(respuesta.list[34].snow3h)
        console.log(lluvia);
        if (nieve==undefined){
         $("#nieve5").html("No hay pronosticos de Nieve")
              }else{
                $("#nieve5").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
              }
             
        
  },
      error: function(jqXHR, textStatus, errorThrown){
        console.log("ERROR :  " + errorThrown);
      }

      
    });

});