$(document).ready(function(){


let imgs = '';
for(let i = 0; i<201; i++){


   

   imgs += '<img src="img/pic'+ i +'.jpg" alt=""></img>'
//    += 더해서 값을 쌓아라라는 뜻(?)



};
$('section').html(imgs)



// 화면에서 마우스가 움직일 때, 숫자를 1~200까지로 변환해서 화면이 보여라
$('body').mousemove(function(e){

    let x = e.pageX;
    let wid = $(window).width();

    let reselt = Math.floor((x/wid)*200)
    console.log(reselt)

    $('section img').hide();
    $('section img').eq(reselt).show();

}) 








    
})// 제이쿼리 끝