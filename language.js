$(document).ready(function() {
    $('.language').click(function() {
        var value = $(this).attr("data-filter");
        if (value == "none") {
            $('.L-filter').show("1000");
        } else {
            $('.L-filter').not("." + value).fadeOut("1000");
            $('.L-filter').filter("." + value).fadeIn("1000");
        }
        $(this).addClass('active').siblings().removeClass('active');
    });
});