var cook = document.cookie;
alert(cook);

if (cook === "") {
    //var d = new Date();
    //d.setTime(d.getTime() + 1000*60*60*2); // add two seconds.
    document.cookie = "color=red;";
    document.cookie = "number=17;";
    document.cookie = "user={'name':'bob','lastname':'smith'}";
}

document.cookie = "number=58;";

var cookafter = document.cookie;
var cookieTray = cookafter.split(';');
for (var i = 0; i < cookieTray.length; i++) {
    var cVals = cookieTray[i].split('=');
    if (cVals[0].trim() === "user") {
        var u = JSON.parse(cVals[1]);
        alert(u.name);
    }
}
alert(cookafter);
