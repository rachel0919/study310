

$(document).ready(function(){


    // when mouseenter to article, become wider than usual
    $('article').mouseenter(function(){


        // play video
        let vid = $(this).find('video').get(0);
        vid.play()



        $(this).stop().animate({'width':'35%'},1000,function(){

            // find 'h3' and change amount of right
            $(this).find('h3').stop().animate({'right':'10px'},400)

            // find 'p' and change amount of right
            $(this).find('p').stop().animate({'right':'10px'},800)



        });

        // find 'video' and change amount of opacity
        $(this).find('video').stop().animate({'opacity':0.9},1200)

    });




    // when mouseleave to article, become smaller than usual


    $('article').mouseleave(function(){

            // pause video
            let vid = $(this).find('video').get(0);
            vid.currentTime = 0
            vid.pause()
    


        $(this).stop().animate({'width':'12%'},700)

        $(this).find('video').stop().animate({'opacity':0},1800)


        // find 'h3' and change amount of right
        $(this).find('h3').stop().animate({'right':'-310px'},400)

        // find 'p' and change amount of right
        $(this).find('p').stop().animate({'right':'-310px'},800)




    });


})