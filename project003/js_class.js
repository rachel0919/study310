$(document).ready(function(){


    // 화면의 높이 값을 구해라
    let ht = $(window).height()
    
    console.log(ht);
    $('#wrap>div').eq(2).height(ht+300)
    






    // nav li 에 마우스를 클릭했을때, 나 자신에게 addClass를 해라

    $('nav li').click(function(){

        $('nav li').removeClass('on')
        $(this).addClass('on');


        // 클릭할 때마다 나 자신의 순번을 구하고,
        // 그 순번에 맞는 box의 높이를 찾아라
        let i = $(this).index()
        let divHt = $('#wrap>div').eq(i).height()
        

        //박스마다 화면상단에서부터 떨어져있는 거리를 찾아라
        let divot = $('#wrap>div').eq(i).offset().top;

        console.log('박스'+i+'의 거리는'+divot+'이다');
        $('html,body').stop().animate({'scrollTop':divot},800)

    });







})