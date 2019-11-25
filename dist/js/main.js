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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF9faXRlbXMgPSB7XHJcbiAgICAgICAgICAgIGl0ZW06ICcuY2F0YWxvZ19fbGlzdF9fYXNpZGVfX2Ryb3Bkb3duX19sYWJlbCcsXHJcbiAgICAgICAgICAgIGxpc3Q6ICcuY2F0YWxvZ19fbGlzdF9fYXNpZGVfX2Ryb3Bkb3duX19saXN0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9fY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gJChfX2l0ZW1zLmxpc3QpLmhpZGUoKVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuaXRlbSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIF90aGlzTGlzdCA9ICQoX3RoaXMpLnNpYmxpbmdzKF9faXRlbXMubGlzdClcclxuICAgICAgICAgICAgJChfdGhpcykucGFyZW50KCcuY2F0YWxvZ19fbGlzdF9fYXNpZGVfX2Ryb3Bkb3duLmlzLS1kcm9wZG93bicpLnRvZ2dsZUNsYXNzKF9fY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuaXRlbSkubm90KF90aGlzKS5wYXJlbnQoJy5jYXRhbG9nX19saXN0X19hc2lkZV9fZHJvcGRvd24uaXMtLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX3RoaXMpLnNpYmxpbmdzKF9faXRlbXMubGlzdCkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubGlzdCkubm90KF90aGlzTGlzdCkuc2xpZGVVcCgpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gdGhpc0lucHV0LnZhbCgpXHJcblxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tcGx1cycpICYmIHRoaXNWYWx1ZSA8IDk5OTkpIHRoaXNWYWx1ZSsrO1xyXG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1taW51cycpICYmIHRoaXNWYWx1ZSA+IDEpIHRoaXNWYWx1ZS0tO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpc1ZhbHVlIDwgMSB8fCB0aGlzVmFsdWUgPiA5OTk5KSB0aGlzVmFsdWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzSW5wdXQudmFsKHRoaXNWYWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihtZW51KSB7XHJcbiAgICAgICAgICAgICQobWVudSkudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuZHJvcGRvd24tbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSAkKHRoaXMpLnNpYmxpbmdzKCcuYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oY29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZHJvcGRvd24tYmxvY2sgdWwgbGkgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1RhcmdldCA9ICQodGhpcykuZGF0YSgnc29ydCcpXHJcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIChuYXZiYXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0c19fcmlnaHQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyAobmF2YmFySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JfX2lubmVyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgKG5hdmJhckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgICAgICQoJy5pcy0tY29udGFpbmVyLXBsJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnLmlzLS1jb250YWluZXItcHInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLnJpZ2h0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEhlaWdodCgpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFib3V0X190b3BfX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmFib3V0X190b3BfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuYWJvdXRfX3RvcF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgICAgICAkKCcuZm9ybS5pcy0tYmFza2V0JykuaGlkZSgpXHJcblxyXG4gICAgICAgICQoJy5idG4uaXMtLWZvcm0tYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5mb3JtLmlzLS1iYXNrZXQnKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJmX3Bob25lXCJdJyk7XHJcblxyXG4gICAgICAgIGlmKHBob25lSW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZUlucHV0c1tpXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzUyLjkyNDkwNiwgMzYuNTc0NzcwXSxcclxuICAgICAgICAgICAgem9vbTogOCxcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjg1MzcyMSwgMzcuNDM4NTU0XSwge1xyXG4gICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICczMDM2MjAsINCe0YDQu9C+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J3QvtCy0L7QtNC10YDQtdCy0LXQvdGM0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0L8uINCl0L7QvNGD0YLQvtCy0L4sINGD0LsuINCh0YLRgNC+0LjRgtC10LvRjNC90LDRjywgMTMnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Mi45NjI3NDcsIDM1Ljc1ODc3OF0sIHtcclxuICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnMzAzOTAwLCDQntGA0LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0YDQuNGG0LrQuNC5INGA0LDQudC+0L0sINC/LiDQndCw0YDRi9GI0LrQuNC90L4sINCf0YDQvtC80YvRiNC70LXQvdC90YvQuSDQv9C10YDQtdGD0LvQvtC6LCAxOSDQkCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJlc2V0OiAnaXNsYW5kcyNpY29uJ1xyXG4gICAgICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF9faXRlbXMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6ICcjb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhcjogJy5uYXZiYXJfX21vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgbW9iaWxlTmF2YmFyQnRuOiAnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicsXHJcbiAgICAgICAgICAgIGJvZHk6ICdib2R5JyxcclxuICAgICAgICAgICAgZmlsdGVyc0J0bjogJy5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGwuaXMtLWZpbHRlcnMgLmNhdGFsb2ctaG9tZV9fdGl0bGVfX2FsbF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGZpbHRlcnNXcmFwOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGUnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQ2xvc2U6ICcuY2F0YWxvZy1ob21lX19hc2lkZV9fY2xvc2UgYSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfX2NsYXNlcyA9IHtcclxuICAgICAgICAgICAgb3Blbk1lbnU6ICdpcy0tb3Blbi1tZW51JyxcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXk6ICdpcy0tb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG9wZW5NZW51QnRuOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgb3BlbkZpbHRlcnM6ICdpcy0tZmlsdGVycydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSkpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5OYXZiYXIoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk5hdmJhcigpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5GaWx0ZXJzKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRmlsdGVycygpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk92ZXJsYXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWxsKCkge1xyXG4gICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5UGFkZGluZygpIHtcclxuICAgICAgICAgICAgdmFyIHB0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUFsbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuZmlsdGVyc0Nsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19jb250cm9sc19fc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2NvbnRyb2xzJykuYWRkQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19jb250cm9sc19fc2VhcmNoJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgJCgnLm5hdmJhcl9fY29udHJvbHMnKS5yZW1vdmVDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2xpc3RfX2hlYWRpbmdfX21vYmlsZSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlcnMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
