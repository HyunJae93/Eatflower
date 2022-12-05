$(function () {
    $("#gnb>li").mouseover(function () {
        $("#gnb>li").children(".sub").stop().slideDown();
        //stop을 넣어야지 슬라이드다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
    });
    $("#gnb>li").mouseleave(function () {
        $("#gnb>li").children(".sub").stop().slideUp();//1000 = 1초
    });
});//모든 내용이 요기 안에 들어갑니다

$(function () {
    /*자세히 보기 버튼(.more a)를 클릭하니까, 팝업(.popup)이 나타나고(fadeIn되고)
    x버튼(.close)을 클릭하니까, 팝업(.popup)이 사라진다(fadeOut)*/
    $(".event_box a").click(function () {
        $(".popup").fadeIn();
    });//more a를 클릭했을때 일어나는 일

    $(".close").click(function () {
        $(".popup").fadeOut();
    });//close를 클릭했을때 일어나는 일
});//기본구조 끝