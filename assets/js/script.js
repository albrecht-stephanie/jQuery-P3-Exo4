//Bouton 1 : augmente la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
$(function(){ 
var color = $('#rectangle').css('background-color');
var firstHeight = $('#rectangle').height();


    $('#size').click(function change(){

        if(firstHeight < 100){
            $('#rectangle').css('height', firstHeight +=10)
        }
        else if(firstHeight >= 100){
            $('#rectangle').css('height', firstHeight = 10)
        }
          console.log(firstHeight);
    });

    $('#green').click(function(){
        $('#rectangle').css('background-color', 'green')
    });

    $('#razColor').click(function(){
        $('#rectangle').css('background-color', color)
    });

    $('#hide').click(function(){
        $('#rectangle').hide()
    });

    $('#show').click(function(){
        $('#rectangle').show()
    });
});
