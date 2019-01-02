$ (function(){
    'use strict' ;


    var x1 = $(window).height(),
        y1 = $(window).width(),
        x2 = $('.navbar').innerHeight(),
        x3=x1-x2;
    if (y1>=1200){
        $('.carousel-inner img').height(x3);
    }
    



   


    $('.overview button').click(function(){
        $('.overview .showp').toggle();
        $('.overview button p').toggle();
    });




    $('.feature li').click(function(){

        $('.feature li').removeClass("now");

        $(this).addClass("now");

        if ($(this).data('class') === 'all'){
            $('.feature img').show();
        }
        else if ($(this).data('class') === 'website'){
            $('.feature img').hide();
            $('.website').show();
        }
        else if ($(this).data('class') === 'logo'){
            $('.feature img').hide();
            $('.logo').show();
        }
        else if ($(this).data('class') === 'graphic'){
            $('.feature img').hide();
            $('.graphic').show();
        }
        else if ($(this).data('class') === 'marketing'){
            $('.feature img').hide();
            $('.marketing').show();
        }
        else if ($(this).data('class') === 'video'){
            $('.feature img').hide();
            $('.video').show();
        }
    });





    $(' .LatestPost .dsply1').click(function(){
        $('.LatestPost .hidd1').toggle();
        $(' .LatestPost .dsply1 p').toggle();
    });
    $(' .LatestPost .dsply2').click(function(){
        $('.LatestPost .hidd2').toggle();
        $(' .LatestPost .dsply2 p').toggle();
    });
    $(' .LatestPost .dsply3').click(function(){
        $('.LatestPost .hidd3').toggle();
        $(' .LatestPost .dsply3 p').toggle();
    });




   var texwidth = $('.choose .txt').innerHeight();
   $('.choose img').height(texwidth);


   $('.footer .readmore').click(function(){
    $('.footer .p2').toggle();
    $('.footer i').addClass('rotate');
    if ($(".check").is(":visible")){
        $('.footer i').removeClass('rotate');
    }

});



















})