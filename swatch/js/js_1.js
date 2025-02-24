$(document).ready(function(){

// section의 높이를 화면의 높이와 같이해라

// 화면의 높이 값 찾기 처음부분을 셋팅하는거임
let ht = $(window).height();
$('section').height(ht)

// 화면의 크기가 변경될 때마다 화면의 크기를 찾아서 section에 높이를 설정하라

$(window).resize(function(){

    let ht = $(window).height();
    $('section').height(ht)
    // 리사이징 될 때마다 바뀜

})







})