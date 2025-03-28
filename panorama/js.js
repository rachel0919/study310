$(document).ready(function(){


    $('article').mouseenter(function(){


        $(this).parent('.circle').addClass('on')



    })

    $('article').mouseleave(function(){
        

        $(this).parent('.circle').removeClass('on')



    })






})