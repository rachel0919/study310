$(document).ready(function(){



    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        $('h1').text(sc)

        $('section>article').eq(0).css({'transform':'translateZ('+sc+'px)'})
        $('section>article').eq(1).css({'transform':'translateZ('+(-5000+sc)+'px)'})
        $('section>article').eq(2).css({'transform':'translateZ('+(-10000+sc)+'px)'})
        $('section>article').eq(3).css({'transform':'translateZ('+(-15000+sc)+'px)'})
        $('section>article').eq(4).css({'transform':'translateZ('+(-20000+sc)+'px)'})



        // 일정거리 구간일 때 박스 on 붙이기

        if(sc>=0 && sc<5000){

            $('section>article').removeClass('on')  
            $('section>article').eq(0).addClass('on')  



        }
        if(sc>=5000 && sc<10000){

            $('section>article').removeClass('on')  
            $('section>article').eq(1).addClass('on')  



        }
        if(sc>=10000 && sc<15000){

            $('section>article').removeClass('on')  
            $('section>article').eq(2).addClass('on')  



        }
        if(sc>=15000 && sc<20000){

            $('section>article').removeClass('on')  
            $('section>article').eq(3).addClass('on')  



        }
        if(sc>=20000){

            $('section>article').removeClass('on')  
            $('section>article').eq(4).addClass('on')  



        }






    })



    // gnb의 li를 클릭했을 때, 스크롤이 일정거리만큼 움직여라
    $('.gnb li').click(function(){

        let i = $(this).index();
        $('html,body').stop().animate({'scrollTop':5000*i},1000)



    })








})