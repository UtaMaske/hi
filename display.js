$(document).ready(function() {
    $('.button').click(function() {
        var value = $(this).attr("data-filter");
        if (value == "none") {
            $('.filter').show("1000");
        } else {
            $('.filter').not("." + value).fadeOut("1000");
            $('.filter').filter("." + value).fadeIn("1000");
        }
        $(this).addClass('active').siblings().removeClass('active');
    });
});