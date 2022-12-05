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
    $(".mtab_box").hide(); //tab_content 부분을 모두 숨김.
    $("ul.mtabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".mtab_box:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.mtabs li").click(function () {

        $("ul.mtabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mtab_box").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 디저트 */
    $(".sub ul:nth-child(2) li:nth-child(1)").click(function () {

        $("ul.mtabs li").removeClass("active"); //Remove any "active" class
        $("ul.mtabs li:nth-child(1)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab1").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 드링크 */
    $(".sub ul:nth-child(2) li:nth-child(2)").click(function () {

        $("ul.mtabs li").removeClass("active"); //Remove any "active" class
        $("ul.mtabs li:nth-child(2)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab2").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 패키지 */
    $(".sub ul:nth-child(2) li:nth-child(3)").click(function () {

        $("ul.mtabs li").removeClass("active"); //Remove any "active" class
        $("ul.mtabs li:nth-child(3)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab3").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    /* 굿즈 */
    $(".sub ul:nth-child(2) li:nth-child(4)").click(function () {

        $("ul.mtabs li").removeClass("active"); //Remove any "active" class
        $("ul.mtabs li:nth-child(4)").addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab4").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });



});





$(function () {
    if (location.hash == "#mtab1") {
        $('.mtabs').find('li').eq(0).addClass('active').siblings().removeClass();
        $('.tab-content').find('#mtab1').addClass('active in').siblings().removeClass('active in');
    } else if (location.hash == "#mtab2") {
        $('.mtabs').find('li').eq(1).addClass('active').siblings().removeClass();
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab2").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    } else if (location.hash == "#mtab3") {
        $('.mtabs').find('li').eq(2).addClass('active').siblings().removeClass();
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab3").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    }
    else if (location.hash == "#mtab4") {
        $('.mtabs').find('li').eq(3).addClass('active').siblings().removeClass();
        $(".mtab_box").hide(); //모든 contents들 숨김
        $("#mtab4").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    }
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
})

/*팝업*/
$(function () {
    /*자세히 보기 버튼(.more a)를 클릭하니까, 팝업(.popup)이 나타나고(fadeIn되고)
    x버튼(.close)을 클릭하니까, 팝업(.popup)이 사라진다(fadeOut)*/
    $(".menu_margin ul li a").click(function () {
        $(".mpopup").fadeIn();
    });//more a를 클릭했을때 일어나는 일

    $(".mclose").click(function () {
        $(".mpopup").fadeOut();
    });//close를 클릭했을때 일어나는 일
});//기본구조 끝