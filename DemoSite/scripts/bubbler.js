$(document).ready(
    function () {
        var sec = $("#secOuter");
        sec.click(clicker);
        //sec.children().click(clicker)
        //    .children().click(clicker)
        //    .children().click(clicker);
        sec.find("*").click(clicker);
       // sec.parents().click(clicker);
        $("#tblOne").find("*").click(tableClicker);
    }
);

function clicker(evt) {
    evt = evt || window.event;
    var clicked = evt.currentTarget || evt.srcElement;
    if (clicked.tagName === "LI") {
        alert(clicked.id + " was clicked");
        evt.stopPropagation();
        evt.cancelBubble = true;
    }
    alert(clicked.id + " was clicked");

    //if (clicked === evt.target) {
    //    alert(clicked.id + " was clicked");
    //}
}

function tableClicker(evt) {
    evt = evt || window.event;
    var clicked = evt.target || evt.srcElement;
    //var handler = evt.currentTarget;
    //clicked = handler;
    if (clicked.tagName === "TD") {
        if (clicked.parentNode.className === "selected")
            clicked.parentNode.className = "";
        else
            clicked.parentNode.className = "selected";
    }
}