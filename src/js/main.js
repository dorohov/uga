(function($) {
    "use strict"
    $(function() {

        function setHeight() {
            var navbarHeight = $('.navbar').innerHeight()
            var footerHeight = $('.footer').innerHeight()

            $('main').css({
                minHeight: 'calc(100vh - ' + (navbarHeight + footerHeight) + 'px)'
            })

            $('.contacts__right').css({
                minHeight: 'calc(100vh - ' + (navbarHeight + footerHeight) + 'px)'
            })

            $('.error__inner').css({
                minHeight: 'calc(100vh - ' + (navbarHeight + footerHeight) + 'px)'
            })

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()

            $('.is--container-pl').css({
                paddingLeft: padding.left + 30
            })

            $('.is--container-pr').css({
                paddingRight: padding.right + 30
            })
        }

        setHeight()

        $(window).resize(function() {
            setHeight()
        })

        $('.about__top__carousel__items').slick({
            prevArrow: '.about__top__carousel__controls button.is--prev',
            nextArrow: '.about__top__carousel__controls button.is--next' 
        })

        $('form').parsley()

        $('.form.is--basket').hide()

        $('.btn.is--form-basket').on('click', function() {
            $('.form.is--basket').slideToggle()
        })

        var phoneInputs = document.querySelectorAll('[name="f_phone"]');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }

    })
})(jQuery);