$(document).ready(function(){



$('.wrap>div').eq(0).addClass('on')
// 일정 시간이 흐른후 3번 addClass('on')해라
setTimeout(function(){

    $('.wrap>div').eq(2).addClass('on')



},200)

setTimeout(function(){


    $('.wrap>div').eq(1).addClass('on')


},600)


setTimeout(function(){


    $('.wrap>div').eq(4).addClass('on')


},2000)



//  wrap1 없어지기


$('.wrap>div').eq(4).click(function(){


    $('.wrap>div').removeClass('on');

// setTimeout(function(){

//     $('.wrap>div').eq(2).addClass('off')



// },100)

// setTimeout(function(){


//     $('.wrap>div').eq(1).addClass('off')


// },300)

// setTimeout(function(){


//     $('.wrap>div').eq(3).addClass('off')


// },1000)


// setTimeout(function(){


//     $('.wrap>div').eq(4).addClass('off')


// },500)


setTimeout(function(){


        $('.imgtxt').fadeOut(1500, 'swing')
    
    
    },300)










setTimeout(function(){

    $('.wrap2').stop().animate({'top':0},1200, function(){

        $('.inner').stop().animate({'opacity':1},500,function(){



            $('nav').stop().animate({'top':0},500)


        })
    })




},800)




})

$('nav li').eq(1).click(function(){


    $('.wrap3').addClass('on')

})



// 네비에 li 첫번째 클릭 했을때 다시 wrap3은 들어가라

$('nav li').eq(0).click(function(){


    $('.wrap3').removeClass('on')




})











})




