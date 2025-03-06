$(document).ready(function(){

let ht = $('body').height()
$('html,body').stop().animate({'scrollTop':ht},2000)



$(window).scroll(function(){




    let sc = $(this).scrollTop();

    $('section').css({'left':-sc})


})






})