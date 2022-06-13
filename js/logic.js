$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($(this).scrollTop() > $nav.height()) {
            $('.logo-white').hide();
            $('.logo-black').show();
            $('.nav-btn').addClass('nav-btn-scrolled')
        } else {
            $('.logo-white').show();
            $('.logo-black').hide();
            $('.nav-btn').removeClass('nav-btn-scrolled')
        }
        // $('.nav-btn').toggleClass('nav-btn-scrolled');
    });
}());


var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})