$(document).ready(function(){


// find out the height of window
let ht = $(window).height()


console.log(ht);
$('#wrap>div').eq(2).height(ht+300)


// when mouse click nav li, do addClass to myself
$('nav li').click(function(){


    $('nav li').removeClass('on')
    $(this).addClass('on')

    //find your number when click it
    //and find height of box as current number
    let i = $(this).index()
    let divHt = $('#wrap>div').eq(i).height()


    // measure the distance from the top of the HTML page to each box
    let divot = $('#wrap>div').eq(i).offset().top;

    console.log('the distance of box'+i+' is ' + divot);
    $('html,body').stop().animate({'scrollTop':divot},800)




})





})