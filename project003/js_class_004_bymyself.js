$(document).ready(function(){


    // when click to nav li, put addClass 'on' on yourself
    $('nav li').click(function(){
        $('nav li').removeClass('on')
        $(this).addClass('on');

        // find your oen number, replace position of div
        let i = $(this).index();
        let ht = $(window).height()




        $('html,body').stop().animate({'scrollTop':ht*i},1200)

        
    })

    // As you scroll on the screen, something happens like this
    $(window).scroll(function(){

        let sc = $(this).scrollTop()

        let navHt = $('nav').height();
        let homeHt = $('.box1').height();
        console.log(homeHt-navHt)

        if(sc>= homeHt-navHt){

            $('nav').addClass('on')


        }else{


            $('nav').removeClass('on')

        }





    })








})