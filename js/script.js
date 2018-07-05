// (function () {
//     $('.block1__slider').slick();
// });
$(document).ready(function(){
    function func() {
        $('.loader').fadeOut();
    }
    setTimeout(func, 2000);

    // Головний слайдер
    $('.mainSlider').slick({
        dots: false,
        autoplaySpeed:4000,
        autoplay: true,
        prevArrow: '<div class="container mainSlider__arrows"><div class="mainSlider__btn mainSlider__btn-prev "><i class="mdi mdi-chevron-left"></i></div></div>',
        nextArrow: '<div class="container mainSlider__arrows"><div class="mainSlider__btn mainSlider__btn-next"><i class="mdi mdi-chevron-right"></i></div></div>',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.filter__list-active').slideDown();

    $('.filter__title').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('filter__title-active').siblings('.filter__list').slideToggle();
    });

    $('.js-popUpBtn').click(function (e) {
        e.preventDefault();
        $('.popUp').fadeIn();
    });

    $('.js-popUpClose').click(function (e) {
        e.preventDefault();
        $('.popUp').fadeOut();
    })

    var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var tel1_pattern = /^\d+$/;

    $('.popUp__form').submit(function (e) {
        var error = false,
            mailFiled=$('#popUp__mail'),
            mail=$(mailFiled).val(),
            telField=$('#popUp__phone'),
            tel=$(telField).val(),
            wrongData='Поле заполнено не верно',
            emptyfield='Поле обязательно для заполнения';


        var prov = adr_pattern.test(mail);
        var prov1 = tel1_pattern.test(tel);

        var inputs = $('.popUp__input');
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value === ''){
                $(inputs[i]).addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(emptyfield);
                error = true;
            }
        }
        if(!prov && mail!=='' ){
            $(mailFiled).addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(wrongData);
            error = true;
        }
        if(!prov1 && tel!==''){
            $(telField).addClass('popUp__input-required').siblings('.popUp__required').fadeIn().html(wrongData);
            error = true;
        }
        if(error){
            e.preventDefault();
        }
    });

    $('.popUp__input').click(function (e) {
        $(this).removeClass('popUp__input-required').siblings('.popUp__required').fadeOut()
    })

    $('.js-menuOpen').click(function (e) {
        e.preventDefault();
        $('.mainMenu__menu').addClass('mainMenu__menu-open');
    })

    $('.js-menuClose').click(function () {
        $('.mainMenu__menu').removeClass('mainMenu__menu-open');
    })

    $('.js-sidebarToggle').click(function(e){
        e.preventDefault();
        $('.sidebar').toggleClass('sidebar-active');
    })
    // кнопка наверх
    // $("#back-top").hide();
    // $(function () {
    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > 100) {
    //             $('#back-top').fadeIn();
    //         } else {
    //             $('#back-top').fadeOut();
    //         }
    //     });
    //
    //     $('#back-top a').click(function () {
    //         $('body,html').animate({
    //             scrollTop: 0
    //         }, 800);
    //         return false;
    //     });
    // });
    //
    
    // $('.header__menuToggle').click(function () {
    //     $('.header__menu').addClass('header__menu-open');
    // })
    //
    // $('.header__close').click(function () {
    //     $('.header__menu').removeClass('header__menu-open');
    // })
    //
    // $('.lngBlock__active').click(function (e) {
    //     $('.lngBlock__list').slideToggle()
    // })
});
// var imgWidth=$('.mainSlider__img').width();
// function windowSize(){
//
//     if (imgWidth>$(window).width()){
//         $('.mainSlider ').addClass('mainSlider-hidden');
//     }
//     else{
//         $('.mainSlider ').removeClass('mainSlider-hidden');
//     }
// }
//
// $(window).on('load resize',windowSize);