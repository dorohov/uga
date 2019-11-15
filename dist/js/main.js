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
            $(_this).parent('.catalog__list__aside__dropdown').toggleClass(__classes.open)
            $(__items.item).not(_this).parent('.catalog__list__aside__dropdown').removeClass(__classes.open)
            $(_this).siblings(__items.list).slideToggle()
            $(__items.list).not(_thisList).slideUp()
        })


    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $('.counter button').on('click', function() {
            var thisInput = $(this).siblings('input')
            var thisValue = thisInput.val()

            if($(this).hasClass('is--plus') && thisValue < 9999) thisValue++;
            else if($(this).hasClass('is--minus') && thisValue > 1) thisValue--;

            if(thisValue < 1 || thisValue > 9999) thisValue = 0

            thisInput.val(thisValue)
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        function toggleDropdown(menu) {
            $(menu).toggleClass('is--open')
        }

        function closeDropdown() {
            $('.dropdown').removeClass('is--open')
        }

        $('.dropdown-label').on('click', function() {
            var container = $(this).parent('.dropdown')
            var block = $(this).siblings('.block')

            toggleDropdown(container)
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.dropdown')
            if(targets.length <= 0) closeDropdown()
        })

        $('.dropdown-block ul li span').on('click', function() {
            var thisTarget = $(this).data('sort')
            closeDropdown()
            alert('Сортировка по ' + thisTarget)
        })

    })
})(jQuery);
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

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [52.924906, 36.574770],
            zoom: 8,
            controls: []
        })

        myMap.geoObjects
            .add(new ymaps.Placemark([52.853721, 37.438554], {
                balloonContent: '303620, Орловская область, Новодеревеньковский район, п. Хомутово, ул. Строительная, 13'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            .add(new ymaps.Placemark([52.962747, 35.758778], {
                balloonContent: '303900, Орловская область, Урицкий район, п. Нарышкино, Промышленный переулок, 19 А'
            }, {
                preset: 'islands#icon'
            }))
    }


    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        var __items = {
            overlay: '#overlay',
            mobileNavbar: '.navbar__mobile__container',
            mobileNavbarBtn: '.navbar__mobile button',
            body: 'body',
            filtersBtn: '.catalog-home__title__all.is--filters .catalog-home__title__all__text',
            filtersWrap: '.catalog-home__aside',
            filtersClose: '.catalog-home__aside__close a'
        }

        var __clases = {
            openMenu: 'is--open-menu',
            openOverlay: 'is--overlay',
            openMenuBtn: 'is-active',
            openFilters: 'is--filters'
        }

        function toggleNavbar() {
            if(!$('body').hasClass(__clases.openMenu)) {
                openNavbar()
            }else {
                closeNavbar()
            }
        }

        function closeNavbar() {
            closeOverlay()
            $(__items.mobileNavbarBtn).removeClass(__clases.openMenuBtn)
            $(__items.body).removeClass(__clases.openMenu)
        }

        function openNavbar() {
            openOverlay()
            $(__items.mobileNavbarBtn).addClass(__clases.openMenuBtn)
            $(__items.body).addClass(__clases.openMenu)
        }

        function toggleFilters() {
            if(!$('body').hasClass(__clases.openFilters)) {
                openFilters()
            }else {
                closeFilters()
            }
        }

        function closeFilters() {
            closeOverlay()
            $(__items.body).removeClass(__clases.openFilters)
        }

        function openFilters() {
            openOverlay()
            $(__items.body).addClass(__clases.openFilters)
        }

        function openOverlay() {
            $(__items.body).addClass(__clases.openOverlay)
        }

        function closeOverlay() {
            $(__items.body).removeClass(__clases.openOverlay)
        }

        setBodyPadding()

        function closeAll() {
            closeNavbar()
            closeOverlay()
            closeFilters()
        }

        function setBodyPadding() {
            var pt = $('.navbar').innerHeight()
            $('body').css({
                paddingTop: pt
            })
        }

        $(__items.mobileNavbarBtn).on('click', function() {
            toggleNavbar()
        })

        $(__items.overlay).on('click', function() {
            closeAll()
        })

        $(__items.filtersBtn).on('click', function() {
            toggleFilters()
        })

        $(__items.filtersClose).on('click', function() {
            closeFilters()
        })
        
        $(window).resize(function() {
            setBodyPadding()
        })

        $('.navbar__controls__search').on('click', function() {
            $('.navbar__controls').addClass('is--search')
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar__controls__search')
            if(targets.length <= 0) $('.navbar__controls').removeClass('is--search')
        })

        $('.catalog__list__heading__mobile span').on('click', function() {
            toggleFilters()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBpdGVtOiAnLmNhdGFsb2dfX2xpc3RfX2FzaWRlX19kcm9wZG93bl9fbGFiZWwnLFxyXG4gICAgICAgICAgICBsaXN0OiAnLmNhdGFsb2dfX2xpc3RfX2FzaWRlX19kcm9wZG93bl9fbGlzdCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfX2NsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICQoX19pdGVtcy5saXN0KS5oaWRlKClcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBfdGhpc0xpc3QgPSAkKF90aGlzKS5zaWJsaW5ncyhfX2l0ZW1zLmxpc3QpXHJcbiAgICAgICAgICAgICQoX3RoaXMpLnBhcmVudCgnLmNhdGFsb2dfX2xpc3RfX2FzaWRlX19kcm9wZG93bicpLnRvZ2dsZUNsYXNzKF9fY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuaXRlbSkubm90KF90aGlzKS5wYXJlbnQoJy5jYXRhbG9nX19saXN0X19hc2lkZV9fZHJvcGRvd24nKS5yZW1vdmVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfdGhpcykuc2libGluZ3MoX19pdGVtcy5saXN0KS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5saXN0KS5ub3QoX3RoaXNMaXN0KS5zbGlkZVVwKClcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmNvdW50ZXIgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSW5wdXQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpXHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsdWUgPSB0aGlzSW5wdXQudmFsKClcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wbHVzJykgJiYgdGhpc1ZhbHVlIDwgOTk5OSkgdGhpc1ZhbHVlKys7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW1pbnVzJykgJiYgdGhpc1ZhbHVlID4gMSkgdGhpc1ZhbHVlLS07XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPCAxIHx8IHRoaXNWYWx1ZSA+IDk5OTkpIHRoaXNWYWx1ZSA9IDBcclxuXHJcbiAgICAgICAgICAgIHRoaXNJbnB1dC52YWwodGhpc1ZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKG1lbnUpIHtcclxuICAgICAgICAgICAgJChtZW51KS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bi1sYWJlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIHZhciBibG9jayA9ICQodGhpcykuc2libGluZ3MoJy5ibG9jaycpXHJcblxyXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihjb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bi1ibG9jayB1bCBsaSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzVGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCdzb3J0JylcclxuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpXHJcbiAgICAgICAgICAgIGFsZXJ0KCfQodC+0YDRgtC40YDQvtCy0LrQsCDQv9C+ICcgKyB0aGlzVGFyZ2V0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIChuYXZiYXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0c19fcmlnaHQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyAobmF2YmFySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JfX2lubmVyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgKG5hdmJhckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgICAgICQoJy5pcy0tY29udGFpbmVyLXBsJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnLmlzLS1jb250YWluZXItcHInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLnJpZ2h0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEhlaWdodCgpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFib3V0X190b3BfX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmFib3V0X190b3BfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuYWJvdXRfX3RvcF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgICAgICAkKCcuZm9ybS5pcy0tYmFza2V0JykuaGlkZSgpXHJcblxyXG4gICAgICAgICQoJy5idG4uaXMtLWZvcm0tYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5mb3JtLmlzLS1iYXNrZXQnKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzUyLjkyNDkwNiwgMzYuNTc0NzcwXSxcclxuICAgICAgICAgICAgem9vbTogOCxcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjg1MzcyMSwgMzcuNDM4NTU0XSwge1xyXG4gICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICczMDM2MjAsINCe0YDQu9C+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J3QvtCy0L7QtNC10YDQtdCy0LXQvdGM0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0L8uINCl0L7QvNGD0YLQvtCy0L4sINGD0LsuINCh0YLRgNC+0LjRgtC10LvRjNC90LDRjywgMTMnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Mi45NjI3NDcsIDM1Ljc1ODc3OF0sIHtcclxuICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnMzAzOTAwLCDQntGA0LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0YDQuNGG0LrQuNC5INGA0LDQudC+0L0sINC/LiDQndCw0YDRi9GI0LrQuNC90L4sINCf0YDQvtC80YvRiNC70LXQvdC90YvQuSDQv9C10YDQtdGD0LvQvtC6LCAxOSDQkCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJlc2V0OiAnaXNsYW5kcyNpY29uJ1xyXG4gICAgICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF9faXRlbXMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6ICcjb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhcjogJy5uYXZiYXJfX21vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgbW9iaWxlTmF2YmFyQnRuOiAnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicsXHJcbiAgICAgICAgICAgIGJvZHk6ICdib2R5JyxcclxuICAgICAgICAgICAgZmlsdGVyc0J0bjogJy5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGwuaXMtLWZpbHRlcnMgLmNhdGFsb2ctaG9tZV9fdGl0bGVfX2FsbF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGZpbHRlcnNXcmFwOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGUnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQ2xvc2U6ICcuY2F0YWxvZy1ob21lX19hc2lkZV9fY2xvc2UgYSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfX2NsYXNlcyA9IHtcclxuICAgICAgICAgICAgb3Blbk1lbnU6ICdpcy0tb3Blbi1tZW51JyxcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXk6ICdpcy0tb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG9wZW5NZW51QnRuOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgb3BlbkZpbHRlcnM6ICdpcy0tZmlsdGVycydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSkpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5OYXZiYXIoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk5hdmJhcigpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5GaWx0ZXJzKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRmlsdGVycygpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk92ZXJsYXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWxsKCkge1xyXG4gICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5UGFkZGluZygpIHtcclxuICAgICAgICAgICAgdmFyIHB0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUFsbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuZmlsdGVyc0Nsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19jb250cm9sc19fc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2NvbnRyb2xzJykuYWRkQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19jb250cm9sc19fc2VhcmNoJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgJCgnLm5hdmJhcl9fY29udHJvbHMnKS5yZW1vdmVDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2xpc3RfX2hlYWRpbmdfX21vYmlsZSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlcnMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
