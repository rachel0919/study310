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
})

})     //제이쿼리 끝!!!!!!!!



