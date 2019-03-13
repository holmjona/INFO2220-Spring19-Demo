$(document).ready(stuffAtStart);

function stuffAtStart() {
    $(".accordian,.tabs").click(function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;
        var th = $(t);
        //th.parent().find("h3").removeClass("selected");
        th.siblings("h3.selected").removeClass("selected").next().slideUp(2000);
        th.addClass("selected");
        th.next().slideDown(2000, function () {
            th.next().addClass("selected");
            //alert("Boo");
        });//.addClass("selected");
       // th.prev().removeClass("selected");
    });
}