$(()=>{
    /* Jquery de horario*/
    $('.linkInscripcion').hide();
    $('.boxeo').click(function () {
        $('.linkInscripcion').show();
        $('.linkInscripcionK').hide();
        $('.cajaDesplazableBoxeo').hide();
    })
    $('.linkInscripcionK').hide();
    $('.kickboxing').click(function () {
        $('.linkInscripcionK').show();
        $('.linkInscripcion').hide();
        $('.cajaDesplazableKickboxing').hide();
    })
    $('.horas').click(function(){
        $('.linkInscripcion').hide();
        $('.linkInscripcionK').hide();
    })
    //Jquery animaciones 
    $('.container_boxeoHorario').hide();
    $('.boxeo').click(function(){
        $('.container_kickboxingHorario').hide();
        $('.container_boxeoHorario').fadeToggle(1000);
    })
    $('.container_kickboxingHorario').hide();
    $('.kickboxing').click(function(){
        $('.container_boxeoHorario').hide();
        $('.container_kickboxingHorario').fadeToggle(1000);
    })
    $('.boxeoHorario').click(function(){
        $('.cajaDesplazableBoxeo').animate({
            width:'toggle'
        });
    })
    $('.kickboxingHorario').click(function(){
        $('.cajaDesplazableKickboxing').fadeToggle(1000);
    })

})