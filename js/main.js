$(function(){
    


    // $(".util_myca").hover(function(){
    //     $(".my").stop().slideDown();
    // }, function(){
    //     $(".my").stop().slideUp();
    // })// hover

    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().animate({height:"400px", padding :"20px"}, "fast")
    // }, function(){
    //     $(".d_wrap").stop().animate({height:"0px", padding :"0px"},"fast")
    // })


    
    // slick 붙이기 move

    $(".fade").slick({
        autoplay:true ,
        dots:true,
        arrows : false,
        autoplaySpeed:3000
    })//

    // $(".main_visual .stop").click(function(){

    //     if( $(this).hasClass("on") == true ){        
    //         $(this).removeClass("on"); /* 이미지stop 슬라이드는 play */
    //         $(".move").slick("slickPlay");
    //     }else{
    //         $(this).addClass("on");  /* on  이미지가paly 슬라이드멈춤 */
    //         $(".move").slick("slickPause");
    //     }// if

    //})// click

    // main1 photo slick

    // $(".photo").slick({
    //     autoplay:true,
    //     autoplaySpeed:4000,
    //     arrows: false,
    //     dots:true
    // })

    // banner slick
    // $(".banner").slick({
    //     arrows: false,
    //     dots:true
    // })//

    // $(".viewer").slick({
    //     arrows: false,
    //     dots:true
    // })//

    // $(".banner_wrap .b_play").click(function(){
    //     if( $(this).hasClass("on") == true){
    //         $(this).removeClass("on");
    //         $(".banner").slick("slickPause");
    //     }else{
    //         $(this).addClass("on");
    //         $(".banner").slick("slickPlay");
    //     }        
    // })// click

    // $(".viewer_wrap .b_play").click(function(){
    //     if( $(this).hasClass("on") == true){
    //         $(this).removeClass("on");
    //         $(".viewer").slick("slickPause");
    //     }else{
    //         $(this).addClass("on");
    //         $(".viewer").slick("slickPlay");
    //     }        
    // })// click
   

        $(".hamburger").click(function(){
            $("#ham-1").toggleClass("act")
            $(".m_menu").toggleClass("move")
        })

        $(".move").slick({
            autoplay:false ,slidesToShow:4, slidesToScroll:1,dots:false,
            responsive:[//반응형 웹 구현
                        {
                        breakpoint : 480, //화면사이즈
                        settings : {slidesToShow :1,dots:false}//객체1개만 본다는 뜻

                        } , {
                            breakpoint : 200,
                            settings :{slidesToShow:1}
                        }]// breakpoint로 반응형 ㅈ잡는거임. 
        })


        


        $(".menu_inner > li").hover(function(){
            $(this).find(".sub").stop().slideDown()
        },function(){
            $(".sub").stop().slideUp()
        })

        $(".menu_inner > li").mouseover(function(){
            var n= $(this).index()
            l= n * 269+"px";
            console.log(n)
            console.log(l)
        
            


    $("m_menuu").hover(function(){
        $(this).find("sub").stop().slideDown()
    },function(){
        $(this).find("sub").stop().slideUp()
    })
            })

})//



