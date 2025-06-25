$(function(){
    $("nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    })

    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }
        $(".slide>ul>li").stop().fadeOut();
        $(".slide>ul>li").eq(i).stop().fadeIn();
    }
    setInterval(slide, 3000);
    
    $(".pop").click(function(){
        $(".popup").stop().show();
    })
    $(".close").click(function(){
        $(".popup").stop().hide();
    })
})