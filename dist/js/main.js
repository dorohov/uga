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

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmpzIiwibWFpbi5qcyIsIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKG1lbnUpIHtcclxuICAgICAgICAgICAgJChtZW51KS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bi1sYWJlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIHZhciBibG9jayA9ICQodGhpcykuc2libGluZ3MoJy5ibG9jaycpXHJcblxyXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihjb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bi1ibG9jayB1bCBsaSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzVGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCdzb3J0JylcclxuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpXHJcbiAgICAgICAgICAgIGFsZXJ0KCfQodC+0YDRgtC40YDQvtCy0LrQsCDQv9C+ICcgKyB0aGlzVGFyZ2V0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiAnI292ZXJsYXknLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXI6ICcubmF2YmFyX19tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhckJ0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBib2R5OiAnYm9keScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNCdG46ICcuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsLmlzLS1maWx0ZXJzIC5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGxfX3RleHQnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzV3JhcDogJy5jYXRhbG9nLWhvbWVfX2FzaWRlJyxcclxuICAgICAgICAgICAgZmlsdGVyc0Nsb3NlOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2Nsb3NlIGEnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW5NZW51OiAnaXMtLW9wZW4tbWVudScsXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5OiAnaXMtLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBvcGVuTWVudUJ0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG9wZW5GaWx0ZXJzOiAnaXMtLWZpbHRlcnMnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTmF2YmFyKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5OYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFsbCgpIHtcclxuICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgIHZhciBwdCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5vdmVybGF5KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VBbGwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5maWx0ZXJzQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNDbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fY29udHJvbHNfX3NlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19jb250cm9scycpLmFkZENsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fY29udHJvbHNfX3NlYXJjaCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJy5uYXZiYXJfX2NvbnRyb2xzJykucmVtb3ZlQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
