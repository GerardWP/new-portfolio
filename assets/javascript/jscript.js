function updateClock() {
    var theTime = moment().format('LT');
    $('#clock').html(theTime);
};

updateClock();
setInterval(function () {
    updateClock();
}, 1000);

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $("div.menu").toggleClass("menu-clicked");
    });
});