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











// DOM 요소 선택
const listItems = document.querySelectorAll('.mainImg ul li');

// 애니메이션 시작 함수
function startAnimation() {
    listItems.forEach((item, index) => {
        // 각 li 요소가 3초마다 차례로 애니메이션을 진행하도록 설정
        setTimeout(() => {
            item.style.zIndex = '10'; // 현재 li가 위에 오도록 z-index 설정

            // 애니메이션 트리거
            item.style.clipPath = 'circle(100% at 50% 100%)'; // 원이 확대되는 효과

            // 강제로 트랜지션을 트리거하기 위해 requestAnimationFrame 사용
            requestAnimationFrame(() => {
                item.style.transition = 'clip-path 1.5s ease-in-out'; // transition을 다시 설정
            });
        }, index * 3000); // 3초 간격으로 차례대로 실행
    });
}

// 처음에 애니메이션 시작
startAnimation();


$(window).on('scroll', function() {
  $('.story .story_box li').each(function() {
      // 현재 li 요소의 위치를 확인
      const position = $(this).offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      // li가 뷰포트에 들어왔을 때 애니메이션 추가 (지연)
      if (position < scrollTop + windowHeight) {
          // storyPic 애니메이션 (0.1초 지연)
          setTimeout(() => {
              $(this).find('.storyPic_001, .storyPic_002, .storyPic_003, .storyPic_004, .storyPic_005').addClass('animate');
          }, 100);  // 0.1초 지연
          
          // storyText 애니메이션 (0.4초 지연)
          setTimeout(() => {
              $(this).find('.storyText_001, .storyText_002, .storyText_004, .storyText_005').addClass('animate');
          }, 400);  // 0.4초 지연
      } else {
          // 요소가 뷰포트 밖으로 나가면 애니메이션 제거
          $(this).find('.storyText_001, .storyText_002, .storyText_004, .storyText_005, .storyPic_001, .storyPic_002, .storyPic_003, .storyPic_004, .storyPic_005').removeClass('animate');
      }
  });
});



})     //제이쿼리 끝!!!!!!!!



