(function($) {
    "use strict"
    $(function() {

        var __items = {
            item: '.catalog__list__aside__dropdown__label',
            list: '.catalog__list__aside__dropdown__list'
        }

        var __classes = {
            open: 'is--open'
        }

        // $(__items.list).hide()

        $(__items.item).on('click', function() {
            var _this = $(this)
            var _thisList = $(_this).siblings(__items.list)
            $(_this).parent('.catalog__list__aside__dropdown.is--dropdown').toggleClass(__classes.open)
            $(__items.item).not(_this).parent('.catalog__list__aside__dropdown.is--dropdown').removeClass(__classes.open)
            $(_this).siblings(__items.list).slideToggle()
            $(__items.list).not(_thisList).slideUp()
        })

        if($('.item__top__right__desc').innerHeight() > 150) {
            $('.item__top__right__desc').addClass('is--long')
        }

        $('.item__top__right__desc .read-next').on('click', function(e) {
            e.preventDefault();
            $('.item__top__right__desc').removeClass('is--long')
        })

    })
})(jQuery);