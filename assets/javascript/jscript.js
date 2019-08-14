function updateClock() {
    var theTime = moment().format('LT');
    $('#clock').html(theTime);
};

updateClock();
setInterval(function () {
    updateClock();
}, 1000);

$("#test-btn").on("click", function () {
    $("div.menu").toggleClass("menu-clicked");
});