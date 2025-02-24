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




})     //제이쿼리 끝!!!!!!!!



