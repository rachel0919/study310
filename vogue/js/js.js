

$(document).ready(function(){


    // btnMenu를 클릭했을 때, nav와 section에 addclass on값을 붙여라 
    $('.btnMenu').click(function(e){

        e.preventDefault()

        $('nav').addClass('on')
        $('section').addClass('on')
        $(this).hide()


    }) 

// nav에 li를 클릭했을 때, 해당 순번을 찾아라 (변수)
    $('nav li').click(function(e){

        e.preventDefault()
        // a태그가 있으면 꼭 생각해보기

        let i = $(this).index()
        // index는 순번을 찾아라
        console.log(i)


        $('section>div').removeClass('on')
        // 해당순번에 맞는 section>div에 addClass on을 해라
        $('section>div').eq(i).addClass('on')


        $('nav').removeClass('on')
        $('section').removeClass('on')
        $('.btnMenu').show()

    })


})