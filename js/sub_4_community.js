$(function () {
    $("#gnb>li").mouseover(function () {
        $("#gnb>li").children(".sub").stop().slideDown();
        //stop을 넣어야지 슬라이드다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
    });
    $("#gnb>li").mouseleave(function () {
        $("#gnb>li").children(".sub").stop().slideUp();//1000 = 1초
    });
});//모든 내용이 요기 안에 들어갑니다

/*tab_제이쿼리*/

$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tab_box").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_box:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_box").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 공지사항 */
    $(".sub ul:nth-child(4) li:nth-child(1)").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $("ul.tabs li:nth-child(1)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_box").hide(); //모든 contents들 숨김
        $("#tab1").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* FAQ */
    $(".sub ul:nth-child(4) li:nth-child(2)").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $("ul.tabs li:nth-child(2)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_box").hide(); //모든 contents들 숨김
        $("#tab2").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 오시는길 */
    $(".sub ul:nth-child(4) li:nth-child(3)").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $("ul.tabs li:nth-child(3)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_box").hide(); //모든 contents들 숨김
        $("#tab3").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });



});

/*Faq_아코디언*/
$(function () {
    $("#tab2> ul> li").click(function () {
        $(this).children(".faq_info").slideToggle();
    });
    $("#tab2> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");
        }

    });
});





$(function () {
    if (location.hash == "#tab1") {
        $('.tabs').find('li').eq(0).addClass('active').siblings().removeClass();
        $('.tab-content').find('#tab1').addClass('active in').siblings().removeClass('active in');
    } else if (location.hash == "#tab2") {
        $('.tabs').find('li').eq(1).addClass('active').siblings().removeClass();
        $(".tab_box").hide(); //모든 contents들 숨김
        $("#tab2").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    } else if (location.hash == "#tab3") {
        $('.tabs').find('li').eq(2).addClass('active').siblings().removeClass();
        $(".tab_box").hide(); //모든 contents들 숨김
        $("#tab3").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    }
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
})