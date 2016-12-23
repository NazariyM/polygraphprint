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

    // skype-call action
    (function () {
        var  skypeCall = $('.js-skype-call'),
             FirstLinkName = skypeCall.find('ul li:first-child a'),
             LastLinkName = skypeCall.find('ul li:last-child a'),
             SkypeBody = skypeCall.children('div'),
             SkypeImg = skypeCall.find('img'),
             SkypeMessage = skypeCall.find('p a:not(ul li a)');

        SkypeBody.css('display', 'inline-block');
        SkypeImg.remove();
        SkypeMessage.text('Связаться через Skype:').css('font-size', '13px');
        FirstLinkName.text('Подзвонить');
        LastLinkName.text('Написать');
    })();

});