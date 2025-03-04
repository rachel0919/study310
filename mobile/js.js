$(document).ready(function(){

    //nav의 li를 클릭시, 각 이름의 테마를 addClass해라
    $('nav li').click(function(e){
        e.preventDefault()

        let name = $(this).find('a').text();
        console.log(name);


        $('#wrap').removeClass()
        $('#wrap').addClass(name)
       

        

    });



    
   

    // 자동으로 시간이 움직이게 저장하기
    /*

    setInterval 구문작성
    함수 구문으로 시간간격을 세팅해서 지정해준다.라는 의미
    setInterval(function(){

        실행문
    },실행간격(1/1000))


    */

    setInterval(function(){
// 시간 출력하기
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
    
        if(sec>=10){
            sec = sec;


        }else{
            sec = '0'+ sec

        }


        if(min>=10){
            min = min;


        }else{
            min = '0'+ min

        }


        if(hr>=10){
            hr = hr;


        }else{
            hr = '0'+ hr

        }
    
    
        $('p span').eq(0).text(hr)
        $('p span').eq(1).text(min)
        $('p span').eq(2).text(sec);




    },1000)


    
        // hr의 범위에 따라 테마가 자동으로 바뀌게 하기
        let now = new Date();
        let hr = now.getHours();
        if(hr>=5 && hr<11){

            $('#wrap').removeClass()
            $('#wrap').addClass('morning')


        }else if(hr>=12 && hr<15){

            $('#wrap').removeClass()
            $('#wrap').addClass('afternoon')

        }else if(hr>=15 && hr<20){

            $('#wrap').removeClass()
            $('#wrap').addClass('evening')

        }else if(hr>=20 && hr<5){

            $('#wrap').removeClass()
            $('#wrap').addClass('night')

        }  

})