$(document).ready(function() {
    $("#mobileMenu").hide();
    $(".mobile-close").hide();
    $(".burger-menu1").click(function() {
        $("#mobileMenu").slideDown(600);
        $(this).hide();
        $(".mobile-close").show();
    });
    $(".mobile-close").click(function() {
        $("#mobileMenu").slideUp(600);
        $(this).hide();
        $(".burger-menu1").show();
    });
    $(".mobile-nav a").click(function() {
        $("#mobileMenu").slideUp(600);
        $(".mobile-close").hide();
        $(".burger-menu1").show();
    });


    $("#mobileFilters").hide();
    $(".mobile-filters-close").hide();
    
    $(".nowcinema .burger-menu").click(function() {
        $("#mobileFilters").slideDown(600);
        $(this).hide();
        $(".mobile-filters-close").show();
    });
    
    $(".mobile-filters-close").click(function() {
        $("#mobileFilters").slideUp(600);
        $(this).hide();
        $(".nowcinema .burger-menu").show();
    });


       $("#mobileFilms").hide();
    $(".mobile-films-close").hide();
    
    $(".popularfilms .burger-menu2").click(function() {
        $("#mobileFilms").slideDown(600);
        $(this).hide();
        $(".mobile-film-close").show();
    });
    
    $(".mobile-film-close").click(function() {
        $("#mobileFilms").slideUp(600);
        $(this).hide();
        $(".popularfilms .burger-menu2").show();
    });
    

       $("#mobilePersons").hide();
    $(".mobile-persons-close").hide();
    
    $(".popularperson .burger-menu3").click(function() {
        $("#mobilePersons").slideDown(600);
        $(this).hide();
        $(".mobile-persons-close").show();
    });
    
    $(".mobile-persons-close").click(function() {
        $("#mobilePersons").slideUp(600);
        $(this).hide();
        $(".popularperson .burger-menu3").show();
    });
});


$(document).ready(function() {
    function isMobile() {
        return window.matchMedia("(max-width: 425px)").matches;
    }
    
    if (isMobile()) {
        let slideNow = 1;
        let slideCount = $('#slidewrapper13').children().length; 
        let visibleSlides = 2;
        let actualSlideCount = Math.ceil(slideCount / visibleSlides);
        let translateWidth = 0;
        let slideInterval = 2000;
        let switchInterval; 

        function updateIndicator() {
            $('.indicator13').text(slideNow + '/' + actualSlideCount);
        }

        function nextSlide() {
            if (slideNow === actualSlideCount || slideNow <= 0 || slideNow > actualSlideCount) {
                $('#slidewrapper13').css('transform', 'translate(0, 0)');
                slideNow = 1;
            } else {
                translateWidth = -$('#viewport13').width() * (slideNow); 
                $('#slidewrapper13').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow++;
            }
            updateIndicator();
        }

        function prevSlide() {
            if (slideNow == 1 || slideNow <= 0 || slideNow > actualSlideCount) {
                translateWidth = -$('#viewport13').width() * (actualSlideCount - 1); 
                $('#slidewrapper13').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow = actualSlideCount; 
            } else {
                translateWidth = -$('#viewport13').width() * (slideNow - 2); 
                $('#slidewrapper13').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow--;
            }
            updateIndicator();
        }
        $('#viewport13').hover(function(){
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(nextSlide, slideInterval);
        });
        $('.next-but13').click(function() { 
            nextSlide();
        });

        $('.prev-but13').click(function() { 
            prevSlide();
        });
        updateIndicator();
        $(window).resize(function() {
            if (!isMobile()) {
                clearInterval(switchInterval);
            }
        });
    }
});




$(document).ready(function() {
        let slideNow = 1;
        let slideCount = $('#slidewrapper14').children().length; 
        let visibleSlides = 2;
        let actualSlideCount = Math.ceil(slideCount / visibleSlides);
        let translateWidth = 0;
        let slideInterval = 2000;
        let switchInterval; 

        function updateIndicator() {
            $('.indicator14').text(slideNow + '/' + actualSlideCount);
        }

        function nextSlide() {
            if (slideNow === actualSlideCount || slideNow <= 0 || slideNow > actualSlideCount) {
                $('#slidewrapper14').css('transform', 'translate(0, 0)');
                slideNow = 1;
            } else {
                translateWidth = -$('#viewport14').width() * (slideNow); 
                $('#slidewrapper14').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow++;
            }
            updateIndicator();
        }

        function prevSlide() {
            if (slideNow == 1 || slideNow <= 0 || slideNow > actualSlideCount) {
                translateWidth = -$('#viewport14').width() * (actualSlideCount - 1); 
                $('#slidewrapper14').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow = actualSlideCount; 
            } else {
                translateWidth = -$('#viewport14').width() * (slideNow - 2); 
                $('#slidewrapper14').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow--;
            }
            updateIndicator();
        }
        $('#viewport14').hover(function(){
            clearInterval(switchInterval);
        });
        $('.next-but14').click(function() { 
            nextSlide();
        });

        $('.prev-but14').click(function() { 
            prevSlide();
        });
        updateIndicator();
        
});
     document.addEventListener("DOMContentLoaded", function () {
            const gooutButton = document.getElementById('goout');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const modalOverlay = document.getElementById('modalOverlay');
            const loginBtn = document.querySelector('button[name="goout"]');
            gooutButton.addEventListener('click', function () {
                modalOverlay.style.display = 'block';
            });
            closeModalBtn.addEventListener('click', function () {
                modalOverlay.style.display = 'none';
            });
            modalOverlay.addEventListener('click', function (e) {
                if (e.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                }
            });
            loginBtn.addEventListener('click', function () {
                modalOverlay.style.display = 'none';
            });
        });