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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgX19pdGVtcyA9IHtcclxuICAgICAgICAgICAgaXRlbTogJy5jYXRhbG9nX19saXN0X19hc2lkZV9fZHJvcGRvd25fX2xhYmVsJyxcclxuICAgICAgICAgICAgbGlzdDogJy5jYXRhbG9nX19saXN0X19hc2lkZV9fZHJvcGRvd25fX2xpc3QnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAkKF9faXRlbXMubGlzdCkuaGlkZSgpXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5pdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgX3RoaXNMaXN0ID0gJChfdGhpcykuc2libGluZ3MoX19pdGVtcy5saXN0KVxyXG4gICAgICAgICAgICAkKF90aGlzKS5wYXJlbnQoJy5jYXRhbG9nX19saXN0X19hc2lkZV9fZHJvcGRvd24nKS50b2dnbGVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm5vdChfdGhpcykucGFyZW50KCcuY2F0YWxvZ19fbGlzdF9fYXNpZGVfX2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX3RoaXMpLnNpYmxpbmdzKF9faXRlbXMubGlzdCkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubGlzdCkubm90KF90aGlzTGlzdCkuc2xpZGVVcCgpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gdGhpc0lucHV0LnZhbCgpXHJcblxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tcGx1cycpICYmIHRoaXNWYWx1ZSA8IDk5OTkpIHRoaXNWYWx1ZSsrO1xyXG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1taW51cycpICYmIHRoaXNWYWx1ZSA+IDEpIHRoaXNWYWx1ZS0tO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpc1ZhbHVlIDwgMSB8fCB0aGlzVmFsdWUgPiA5OTk5KSB0aGlzVmFsdWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzSW5wdXQudmFsKHRoaXNWYWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihtZW51KSB7XHJcbiAgICAgICAgICAgICQobWVudSkudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuZHJvcGRvd24tbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSAkKHRoaXMpLnNpYmxpbmdzKCcuYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oY29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZHJvcGRvd24tYmxvY2sgdWwgbGkgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1RhcmdldCA9ICQodGhpcykuZGF0YSgnc29ydCcpXHJcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgICAgICBhbGVydCgn0KHQvtGA0YLQuNGA0L7QstC60LAg0L/QviAnICsgdGhpc1RhcmdldClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyAobmF2YmFySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcuY29udGFjdHNfX3JpZ2h0JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgKG5hdmJhckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9yX19pbm5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIChuYXZiYXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgICAgICAkKCcuaXMtLWNvbnRhaW5lci1wbCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJy5pcy0tY29udGFpbmVyLXByJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5yaWdodCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRIZWlnaHQoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hYm91dF9fdG9wX19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5hYm91dF9fdG9wX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmFib3V0X190b3BfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJ2Zvcm0nKS5wYXJzbGV5KClcclxuXHJcbiAgICAgICAgJCgnLmZvcm0uaXMtLWJhc2tldCcpLmhpZGUoKVxyXG5cclxuICAgICAgICAkKCcuYnRuLmlzLS1mb3JtLWJhc2tldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuZm9ybS5pcy0tYmFza2V0Jykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiZl9waG9uZVwiXScpO1xyXG5cclxuICAgICAgICBpZihwaG9uZUlucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnB1dHNbaV0sIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IFs1Mi45MjQ5MDYsIDM2LjU3NDc3MF0sXHJcbiAgICAgICAgICAgIHpvb206IDgsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHNcclxuICAgICAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Mi44NTM3MjEsIDM3LjQzODU1NF0sIHtcclxuICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnMzAzNjIwLCDQntGA0LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCd0L7QstC+0LTQtdGA0LXQstC10L3RjNC60L7QstGB0LrQuNC5INGA0LDQudC+0L0sINC/LiDQpdC+0LzRg9GC0L7QstC+LCDRg9C7LiDQodGC0YDQvtC40YLQtdC70YzQvdCw0Y8sIDEzJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2ljb24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbG9yOiAnIzAwOTViNidcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhbNTIuOTYyNzQ3LCAzNS43NTg3NzhdLCB7XHJcbiAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogJzMwMzkwMCwg0J7RgNC70L7QstGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMLCDQo9GA0LjRhtC60LjQuSDRgNCw0LnQvtC9LCDQvy4g0J3QsNGA0YvRiNC60LjQvdC+LCDQn9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0L/QtdGA0LXRg9C70L7QuiwgMTkg0JAnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbidcclxuICAgICAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiAnI292ZXJsYXknLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXI6ICcubmF2YmFyX19tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhckJ0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBib2R5OiAnYm9keScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNCdG46ICcuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsLmlzLS1maWx0ZXJzIC5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGxfX3RleHQnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzV3JhcDogJy5jYXRhbG9nLWhvbWVfX2FzaWRlJyxcclxuICAgICAgICAgICAgZmlsdGVyc0Nsb3NlOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2Nsb3NlIGEnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW5NZW51OiAnaXMtLW9wZW4tbWVudScsXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5OiAnaXMtLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBvcGVuTWVudUJ0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG9wZW5GaWx0ZXJzOiAnaXMtLWZpbHRlcnMnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTmF2YmFyKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5OYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFsbCgpIHtcclxuICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgIHZhciBwdCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5vdmVybGF5KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VBbGwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5maWx0ZXJzQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNDbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fY29udHJvbHNfX3NlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19jb250cm9scycpLmFkZENsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fY29udHJvbHNfX3NlYXJjaCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJy5uYXZiYXJfX2NvbnRyb2xzJykucmVtb3ZlQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX19saXN0X19oZWFkaW5nX19tb2JpbGUgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
