$(document).ready(function () {

    (function () {
        var nav = $('.js-product-nav'),
            navItem = nav.children();

        navItem.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');
            $('html, body').animate({scrollTop: $(el).offset().top}, 1500);
            return false;
        });
    })();

});