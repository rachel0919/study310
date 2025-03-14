// 제이쿼리 기본 설정

$(document).ready(function(){

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
      
        // Hero 섹션을 지나면 배경색을 추가
        if (window.scrollY > heroHeight) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });









// pro_list의 왼쪽 오른쪽을 클릭할 때마다 이미지의 위치가 바뀌어라
// 왼쪽 오른쪽을 눌렀을 때 변수가 변해라
let num = 0;
$('.proList1').children('.right').click(function(){


  
  if(num<4) num++;
 if(num == 4){

    alert('마지막페이지입니다')

  }
 

  $('.proList1').children('.container').children('ul').stop().animate({'left':'-410'*num + 'px'},400)
  


})


$('.proList1').children('.left').click(function(){


  
  if(num>0) num--;
  
  $('.proList1').children('.container').children('ul').stop().animate({'left':'-410'*num + 'px'},400)


})




/*


// 장바구니 클릭시 장바구니가 나타남

let aa = 0;

$('.util li').eq(1).click(function(){

aa++;
if(aa==2)aa=0;
if(aa===1){

  $('.cart').addClass('on')

}else{

  $('.cart').removeClass('on')

}
})




*/

document.querySelector(".util li:nth-child(2) a").addEventListener("click", function (event) {
  event.preventDefault(); // a 태그의 기본 동작(페이지 이동) 막기
  
});
// 장바구니 클릭시 장바구니가 나타남

let aa = 0;

$('.util li').eq(1).click(function(){

aa++;
if(aa==2)aa=0;
if(aa===1){

  $('.cart').addClass('on')

}else{

  $('.cart').removeClass('on')

}
});


// header의 h1를 클릭하면 메인페이지에 on이 붙어라


$('.header h1').click(function(e){

 
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


})




// gnb의 두번째 li를 클릭하면 galleryList에 on이 붙어라

$('.gnb li').eq(1).click(function(e){

  e.preventDefault()

  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(2).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')


  $(window).scrollTop(0);



});





//gallerybox를 클릭하면 product에 on이 붙어라
$('.gallerybox').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')

  
  $('.header').removeClass('sub')
  $('.header').addClass('sub')




})








// proList1 li를 클릭하면 product에 on이 붙어라


$('.proList1 li').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')


  $(window).scrollTop(0);

});




// util의 첫번째 li에 클릭하면 loginPage에 on이 붙어라



$('.util li').eq(0).click(function(e){

  e.preventDefault()
$('.contents').addClass('loginBig');


$('.contents>div').removeClass('on')
$('.contents>div').eq(3).addClass('on')
$(window).scrollTop(0);

});



// loginPage에 logo를 클릭하면 메인페이지로 이동해라
$('.logupperTxt>img').eq(0).click(function(e){

 
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


});



// proList1 li를 클릭하면 product에 on이 붙어라


$('.proSugbox').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')


  $(window).scrollTop(0);

});

// closeBtn을 클릭하면 


$('.closeBtn').click(function(){



$('.cart').removeClass('on')


});

$('.gnb li:first-child').click(function(e) {
  e.preventDefault(); // 기본 동작 방지

  // .story 위치로 부드럽게 스크롤 이동
  $('html, body').stop().animate({
      scrollTop: $('.story').offset().top
  }, 700, 'swing'); // 'swing'으로 더 부드럽게
});




/*

$(document).ready(function() {
  let index = 0;
  const $listItems = $('.mainImg ul li');

  // 첫 번째 li부터 시작
  $listItems.eq(index).addClass('up');

  function showNextItem() {
    // 이전 li의 'up' 클래스 제거
    $listItems.eq(index).removeClass('up');
    
    // 다음 li의 'up' 클래스 추가
    index = (index + 1) % $listItems.length;  // 3개 li가 끝나면 처음으로 돌아가기
    $listItems.eq(index).addClass('up');
  }

  // 3초마다 showNextItem 함수 실행
  setInterval(showNextItem, 3000);
});


*/


    // section에서 mouse wheel했을 때, 다음화면 또는 이전화면으로 이동
    $('hero').on('mousewheel DOMMouseScroll', function(event) {
      let delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

      // 마우스를 올렸을 때 (이전 섹션)
      if (delta > 0) {
          let prev = $(this).prev().offset().top;
          $('html,body').stop().animate({'scrollTop': prev}, 1400, 'easeOutBounce');
      } 
      // 마우스를 내렸을 때 (다음 섹션)
      else if (delta < 0) {
          let next = $(this).next().offset().top;
          $('html,body').stop().animate({'scrollTop': next}, 1400, 'easeOutBounce');
      }

      event.preventDefault(); // 기본 스크롤 방지
  });






})     //제이쿼리 끝!!!!!!!!



