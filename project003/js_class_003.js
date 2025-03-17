$(document).ready(function(){

    // nav li를 클릭했을때, 나 자신에게 addClass on을 붙여라
    $('nav li').click(function(){
    $('nav li').removeClass('on')
    $(this).addClass('on');


    // 나 자신의 순번을 찾고 해당 div에 위치를 바꿔라

    let i = $(this).index()
    $('#wrap>div').removeClass('on');
    
    $('#wrap>div').eq(i).addClass('on')

}) 








})