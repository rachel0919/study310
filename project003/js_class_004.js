$(document).ready(function(){

    // nav li를 클릭했을때, 나 자신에게 addClass on을 붙여라
    $('nav li').click(function(){
    $('nav li').removeClass('on')
    $(this).addClass('on');


    // 나 자신의 순번을 찾고 해당 div에 위치를 바꿔라

    let i = $(this).index();
    let ht = $(window).height()


    $('html,body').stop().animate({'scrollTop':ht*i},1200)
   

}) 

// 화면에서 스크롤 했을 때 다음과 같은 일이 일어나라

$(window).scroll(function(){

    let sc = $(this).scrollTop()
    

    let navHt = $('nav').height();
    let homeHt = $('.box1').height();
    console.log(homeHt-navHt);

    if(sc>= homeHt-navHt){

        $('nav').addClass('on')




    }else{

        $('nav').removeClass('on')

    }

    


})










})