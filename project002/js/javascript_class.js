// 제이쿼리 기본 설정

$(document).ready(function(){


  // hero 오른쪽에서 왼쪽으로 이동하는 자동슬라이드




  // btn을 클릭했을 때 이동하는 구조로 변경
  $('.btn li').click(function(){



    let i = $(this).index();
    $('.btn li').removeClass('on')
    $(this).addClass('on')



    $('.mainImg li').eq(i).css({'left':'0'}).stop().animate({'left':'-100%'})
    $('.mainImg li').eq(i-1).css({'left':'100%'}).stop().animate({'left':'0'})

  });

  // 일정시간마다 버튼이 자동으로 이동

  let a = 0;
  let slide = setInterval(function(){

    a++;
    if(a == 3) a = 0;



    $('.btn li').eq(a).trigger('click')





  },3000);



  // hero에 마우스가 들어갔을 때 화면이 멈추어라
  // 화면이 멈추는게 아니라 setinterval을 지우는 것임

  $('.hero').mouseenter(function(){


    clearInterval(slide)



  })

  $('.hero').mouseleave(function(){
    slide = setInterval(function(){

      a++;
      if(a == 3) a = 0;
  
  
  
      $('.btn li').eq(a).trigger('click')
  
    },3000)
    

  })





// pro_list의 왼쪽 오른쪽을 클릭할 때마다 이미지의 위치가 바뀌어라
// 왼쪽 오른쪽을 눌렀을 때 변수가 변해라
let num = 0;
$('.pro_list').children('.left').click(function(){


  
  if(num<4) num++;
  if(num == 4){

    alert('마지막페이지입니다')

  }

  $('.pro_list').children('.container').children('ul').stop().animate({'left':'-220'*num + 'px'},800)
  



})


$('.pro_list').children('.right').click(function(){


  
  if(num>0) num--;
  
  $('.pro_list').children('.container').children('ul').stop().animate({'left':'-220'*num + 'px'},800)


})











})     //제이쿼리 끝!!!!!!!!



