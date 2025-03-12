

$(document).ready(function(){

    // article에 마우스가 들어갔을 때, 내가 가로값이 커져라 
    $('article').mouseenter(function(){


        // video를 재생을 시켜라
        // get은 속성끼리만
        let vid = $(this).find('video').get(0);
        vid.play()
        








        $(this).stop().animate({'width':'35%'},1000,function(){


            // 내 속의 h3를 찾아 right값이 바뀌게 해라
            $(this).find('h3').stop().animate({'right':'10px'},400)

             // 내 속의 p를 찾아 right값이 바뀌게 해라
             $(this).find('p').stop().animate({'right':'10px'},800)

        });



        // 내 속의 비디오를 찾아 opacity가 보이게 해라
        $(this).find('video').stop().animate({'opacity':0.9},1200)

       

        
    });



    // article에 마우스가 나갔을 때, 내가 가로값이 작아져라 


    $('article').mouseleave(function(){


        let vid = $(this).find('video').get(0);
        vid.currentTime = 0
        vid.pause()
        


        $(this).stop().animate({'width':'12%'},700)

        $(this).find('video').stop().animate({'opacity':0},1800)  
        
        
        // 내 속의 h3를 찾아 right값이 바뀌게 해라
          $(this).find('h3').stop().animate({'right':'-310px'},200)

         // 내 속의 p를 찾아 right값이 바뀌게 해라
         $(this).find('p').stop().animate({'right':'-310px'},500)  



    })

// animate를 썼을때는 css에 transition이 있으면 안됨 꼬임



})