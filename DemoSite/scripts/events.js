

// All event handlers should have an event object (e)
function liClicked(e) {
    // Always do this next line.
    e = e || window.event;
    //alert(e.target.tagName + "::"
    //      +  e.target.innerText + "::"
    //    + e.currentTarget.tagName);
    var trgt = e.target || e.srcElement;

    if (trgt.tagName === "LI") {
        trgt.className = "picked";
    }
}

function liHovered(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    // DO NOT EVER DO THIS!!! Bad Teacher!!
    //trgt.setAttribute("style", "background-color:#F00;");
    trgt.className = "selected";
    if (trgt.tagName === "LI") {
        trgt.innerText = e.x + "--" + e.y;
    }
}

window.onload = loader;

 function loader() {
    var liFroggie = document.getElementById("liFrog");
    //liFroggie.onclick = liClicked;
     var ulThingies = liFroggie.parentNode;
     ulThingies.onclick = liClicked;
     ulThingies.onmousemove = liHovered;

     //var lis = document.getElementsByTagName("LI");
     //for (var i = 0; i < lis.length; i++) {
     //    lis[i].onclick = liClicked;
     //    lis[i].onmousemove = liHovered;
     //}

}