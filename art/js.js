
$(document).ready(function(){


let ht = $('body').height()
// $('html,body').scrollTop(ht)    
$('html,body').stop().animate({'scrollTop':ht},2000)



$(window).scroll(function(){


    // 스크롤 할 때마다 스크롤의 위치값을 찾아라
    let sc = $(this).scrollTop();


    console.log(sc)
    $('section').css({'left':-sc})



});
})


