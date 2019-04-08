//var cook = document.cookie;
//alert(cook);

//if (cook === "") {
//    //var d = new Date();
//    //d.setTime(d.getTime() + 1000*60*60*2); // add two seconds.
//    document.cookie = "color=red;";
//    document.cookie = "number=17;";
//    document.cookie = "user={'name':'bob','lastname':'smith'}";
//}

//document.cookie = "number=58;";

//var cookafter = document.cookie;
//var cookieTray = cookafter.split(';');
//for (var i = 0; i < cookieTray.length; i++) {
//    var cVals = cookieTray[i].split('=');
//    if (cVals[0].trim() === "user") {
//        var u = JSON.parse(cVals[1]);
//        alert(u.name);
//    }
//}
//alert(cookafter);

$(document).ready(function () {
    $("#ulUsers").click(function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;

        // alert user's name.
        //alert(t.tagName);
        var par = t.parentNode;
        var kids = $(t).parent().contents();//.children();
        //var kid1 = kids[0];
        var kid2 = kids.eq(0);
        //alert(kid2.text().trim());
        var name = kid2.text().trim();
        //var kid3 = par.childNodes[0];
        //alert(kid3.textContent.trim());

        localStorage.setItem("username", name);
        var color = kids.eq(1).text();
        sessionStorage.setItem("color", color);

        displayFromStorage();

        // at the end;
        e.preventDefault();
        return false;
    });

    displayFromStorage();

});

function displayFromStorage() {
    if (localStorage.getItem("username") !== null) {
        $("#hName").text(localStorage.getItem("username"));
        $("#hName").css("color", sessionStorage.getItem("color"));
    }

    

}


