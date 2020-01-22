$(document).ready(function(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=3117735&lang=es&units=metric&APPID=65a9b2caaaba5d1b1762d5889a2637ce",
        datatype : "json",
        type: "GET",

        success: function(respuesta) {
          console.log(respuesta);
          var timestamp = moment.unix(respuesta.list[0].dt);
         
          console.log(respuesta.rain1h);
          $("#fechafore").html( timestamp.format('dddd lll')+ "<br>" );
          $("#temperature-value1").html(Math.round(respuesta.list[0].main.temp) + "º" + "C" + "<br>" );
          $("#tempminFore").html("temperatura minima" + " " + Math.floor(respuesta.list[0].main.temp_min) + "º" + "<br>");
          $("#tempmaxFore").html("temperatura maxima" + " " + Math.round(respuesta.list[1].main.temp_max) + "º" + "<br>");       
          $("#speed").html("Velocidad del viento" + " " + respuesta.list[0].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes").html("Nubosidad" + " " + respuesta.list[0].clouds.all + "%" + "<br>");
                    
          lluvia=(respuesta.list[0].rain3h)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia").html("Volumen de Luvia 0,00 mm")
                }else{
                  $("#lluvia").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[0].snow3h)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve").html("Volumen de Nieve 0,00 mm")
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
          var timestamp = moment.unix(respuesta.list[4].dt);
          $("#fechafore2").html(timestamp.format('dddd lll ') + "<br>" );
          $("#temperature-value2").html(Math.round(respuesta.list[4].main.temp) + "º" + "C" + "<br>" );
          $("#tempminFore2").html("temperatura minima" + " " + Math.floor(respuesta.list[2].main.temp_min) + "º" + "<br>");
          $("#tempmaxFore2").html("temperatura maxima" + " " + Math.round(respuesta.list[5].main.temp_max) + "º" + "<br>");       
          $("#speed2").html("Velocidad del viento" + " " + respuesta.list[4].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes2").html("Nubosidad" + " " + respuesta.list[4].clouds.all + "%" + "<br>");
          
          
          lluvia=(respuesta.list[4].rain3h)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia2").html("Volumen de Lluvia 0,00 mm")
                }else{
                  $("#lluvia2").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[4].snow3h)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve2").html("Volumen de Nieve 0,00 mm")
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
          var timestamp = moment.unix(respuesta.list[12].dt)
          $("#fechafore3").html(timestamp.format('dddd lll ') + "<br>" );
          $("#temperature-value3").html(Math.round(respuesta.list[12].main.temp)+ "º" + "C" + "<br>" );
          $("#tempminFore3").html("temperatura minima" + " " + Math.floor(respuesta.list[10].main.temp_min) + "º" + "<br>");
          $("#tempmaxFore3").html("temperatura maxima" + " " + Math.round(respuesta.list[13].main.temp_max) + "º" + "<br>");       
          $("#speed3").html("Velocidad del viento" + " " + respuesta.list[10].wind.speed +" "+ "m/h" + "<br>");
          $("#nubes3").html("Nubosidad" + " " + respuesta.list[10].clouds.all + "%" + "<br>");
                    
          lluvia=(respuesta.list[12].rain)
          console.log(lluvia);
          if (lluvia==undefined){ 
           $("#lluvia3").html("Volumen de Lluvia 0,00 mm")
                }else{
                  $("#lluvia3").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                }

                 
          nieve=(respuesta.list[12].snow)
          console.log(lluvia);
          if (nieve==undefined){
           $("#nieve3").html("Volumen de Nieve 0,00 mm")
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
            var timestamp = moment.unix(respuesta.list[20].dt)
            $("#fechafore4").html(timestamp.format('dddd lll') + "<br>" );
            $("#temperature-value4").html(Math.round(respuesta.list[20].main.temp)+ "º"  + "C" + "<br>" );
            $("#tempminFore4").html("temperatura minima" + " " + Math.floor(respuesta.list[18].main.temp_min) + "º" + "<br>");
            $("#tempmaxFore4").html("temperatura maxima" + " " + Math.round(respuesta.list[21].main.temp_max) + "º" + "<br>");       
            $("#speed4").html("Velocidad del viento" + " " + respuesta.list[20].wind.speed +" "+ "m/h" + "<br>");
            $("#nubes4").html("Nubosidad" + " " + respuesta.list[20].clouds.all + "%" + "<br>");
                      
            lluvia=(respuesta.list[20].rain3h)
            console.log(lluvia);
            if (lluvia==undefined){ 
             $("#lluvia4").html("Volumen de Lluvia 0,00 mm")
                  }else{
                    $("#lluvia4").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
                  }
  
                   
            nieve=(respuesta.list[20].snow3h)
            console.log(lluvia);
            if (nieve==undefined){
             $("#nieve4").html("Volumen de Nieve 0,00 mm")
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
        var timestamp = moment.unix(respuesta.list[28].dt)
        $("#fechafore5").html(timestamp.format ('dddd lll') + "<br>" );
        $("#temperature-value5").html(Math.round(respuesta.list[28].main.temp)+ "º" + "C" + "<br>" );
        $("#tempminFore5").html("temperatura minima" + " " + Math.floor(respuesta.list[26].main.temp_min) + "º" + "<br>");
        $("#tempmaxFore5").html("temperatura maxima" + " " + Math.round(respuesta.list[29].main.temp_max) + "º" + "<br>");       
        $("#speed5").html("Velocidad del viento" + " " + respuesta.list[28].wind.speed +" "+ "m/h" + "<br>");
        $("#nubes5").html("Nubosidad" + " " + respuesta.list[28].clouds.all + "%" + "<br>");
                  
        lluvia=(respuesta.list[28].rain3h)
        console.log(lluvia);
        if (lluvia==undefined){ 
         $("#lluvia5").html("Volumen de Lluvia 0,00 mm")
              }else{
                $("#lluvia5").html("Volumen de lluvia de las ultimas 3 horas" + " " + lluvia);
              }

               
        nieve=(respuesta.list[28].snow3h)
        console.log(lluvia);
        if (nieve==undefined){
         $("#nieve5").html("Volumen de Nieve 0,00 mm")
              }else{
                $("#nieve5").html("Volumen de lluvia de las ultimas 3 horas" + " " + nieve);
              }
             
        
  },
      error: function(jqXHR, textStatus, errorThrown){
        console.log("ERROR :  " + errorThrown);
      }

      
    });

});