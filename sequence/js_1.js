$(document).ready(function(){

    let imgs = '';
    for(let i = 0; i<201; i++){


       imgs += '<img src="img/pic'+ i +'.jpg" alt="" style="display: block;"></img>'



    };
    $('section').html(imgs)

    // when mouse move, caculate numbers from 1 to 200 and show window
    $('body').mousemove(function(e){

        let x = e.pageX;
        let wid = $(window).width();

        let result = Math.floor((x/wid)*200)
        // Math.floor 는 소수가 아니라 자연수로 떨어지게함 ()로 묶어놔야함
        console.log(result)

        $('section img').hide();
        $('section img').eq(result).show();





    })







})// finish JQUERY