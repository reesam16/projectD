jQuery(document).ready(function () {
    $('.burgermenu').on('click', function () {
        $('.mob-nav').fadeToggle(500);
    })
});


$(function () {
    $(document).scroll(function () {
        const $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
})