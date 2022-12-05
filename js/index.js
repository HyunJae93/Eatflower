$(function () {
    $("#gnb>li").mouseover(function () {
        $("#gnb>li").children(".sub").stop().slideDown();
        //stop을 넣어야지 슬라이드다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
    });
    $("#gnb>li").mouseleave(function () {
        $("#gnb>li").children(".sub").stop().slideUp();//1000 = 1초
    });
});//모든 내용이 요기 안에 들어갑니다

/*
 $(function () {
    $(".menu_list>li").mouseover(function () {
        $(this).children(".sub").stop().slideDown();
        //stop을 넣어야지 슬라이드다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
    });
    $(".gnb>li").mouseleave(function () {
        $(".gnb>li").children(".sub").stop().slideUp();//1000 = 1초
    });
});//모든 내용이 요기 안에 들어갑니다

*/


