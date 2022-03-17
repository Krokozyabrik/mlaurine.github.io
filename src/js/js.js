//анимация чисел 



$('.number').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//подсветка пункта меню

let sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();
$(window).on('scroll', function() {
    $('nav a').removeClass('active');
    let cur_pos = $(this).scrollTop();
    sections.each(function() {
        let top = $(this).offset().top - nav_height - 150,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});
nav.find('a').on('click', function() {
    let $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 600);
    return false;
});