$(document).ready(function(){

// section의 높이를 화면의 높이와 같이해라



// 화면의 높이값 찾기 처음부분을 셋팅하는거임
let ht = $(window).height();
$('section').height(ht)

// 화면의 크기가 변경될 때마다 화면의 크기를 찾아서 section에 높이를 설정하라

$(window).resize(function(){

    let ht = $(window).height();
    $('section').height(ht)
    // 리사이징 될 때마다

})


// window에서 스크롤 했을 때 스크롤탑값을 찾아라
$(window).scroll(function(){

   let sc = $(this).scrollTop()
   let ht = $(window).height();
   console.log(sc);


//    sc값이 일정구간에 있을 때 li에 addClass on을 붙여라


/*
    if( sc >= (ht*0)-200  &&  sc < (ht*1)-200 ){

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(0).addClass('on')


    }

    if(sc >= (ht*1)-200 && sc < (ht*2)-200 ){

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(1).addClass('on')


    }

    if(sc >= (ht*2)-200 && sc < (ht*3)-200 ){

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(2).addClass('on')


    }

    if(sc >= (ht*3)-200 && sc < (ht*4)-200 ){

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(3).addClass('on')


    }
*/




    // 위의 공식을 반복문으로 변환하기
    for(let a = 0; a < 4; a++ ){


       
    if(sc >= (ht*a)-200 && sc < (ht*(a+1))-200 ){

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(a).addClass('on')


    } 

    }




});

// gnb의 li를 click했을때, scrollTop의 위치를 바꿔라
$('.gnb li').click(function(){


    // html body안에 scrollTop을 animation을 이용해 움직이게 해라
    /*
    how to make an animation 
    $('선택자').stop().animate({'속성명':속성값},작동시간-1/1000초,easing-생략가능)

    */
    let i = $(this).index()
    let ht = $(window).height();
    $('.gnb li').removeClass('on')
    $(this).addClass('on')
    $('html,body').stop().animate({'scrollTop':ht*i},1400)

})




})