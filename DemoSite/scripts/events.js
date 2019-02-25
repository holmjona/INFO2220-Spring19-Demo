var liClickedElement; 

// All event handlers should have an event object (e)
function liClicked(e) {
    // Always do this next line.
    e = e || window.event;
    //alert(e.target.tagName + "::"
    //      +  e.target.innerText + "::"
    //    + e.currentTarget.tagName);
    var trgt = e.target || e.srcElement;

    if (trgt.tagName === "LI") {
       // trgt.className = "picked";
    }
}

function liOtherClick(e) {
    e = e || window.event;
    //alert("Li was clicked");
    this.className = "moveable";
    liClickedElement = this;
    setPostion(this, e);

}
function removeClick() {
    liClickedElement = undefined;
    this.className = "";
}

function liMoved(e) {
    e = e || window.event;
    //alert("Li was clicked");
    trg = e.target || e.srcElement;
    //if (trg.tagName === "LI")   setPostion(trg, e);
    //if (trg === "LI") 
    setPostion(liClickedElement, e);

}

function setPostion(ele, ev){
    ele.style.top = (ev.y - 10) + "px";// "100px";
    ele.style.left = (ev.x - 10) + "px";//"100px";
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

function addToList(ul, txt) {
    var ne = document.createElement("li");
    ne.innerText = txt;
    ul.appendChild(ne);
}

function setAddItemEvent(name) {
    var red = document.getElementById(name);
    red.onmouseenter = function () {
        if (typeof liClickedElement !== "undefined") {
            var ul = this.getElementsByTagName("ul")[0];
            addToList(ul, liClickedElement.innerText);
        }
    };
}


window.onload = loader;

 function loader() {
    var liFroggie = document.getElementById("liFrog");
    //liFroggie.onclick = liClicked;
     var ulThingies = liFroggie.parentNode;
     //ulThingies.onclick = liClicked;
     //ulThingies.onmousemove = liHovered;

     var bdy = document.getElementsByTagName("body");
     bdy[0].onmousemove = liMoved;

     //var red = document.getElementById("divOne");
     //red.onmouseenter = function () {
     //    if (typeof liClickedElement !== "undefined") {
     //        addToList(this, liClickedElement.innerText);
     //    }
     //};
     setAddItemEvent("divOne");
     setAddItemEvent("divTwo");
     setAddItemEvent("divThree");

     var lis = document.getElementsByTagName("LI");
     for (var i = 0; i < lis.length; i++) {
         lis[i].onmousedown = liOtherClick;
         lis[i].onmouseup = removeClick;
        //lis[i].onmousemove = liMoved;
     //    lis[i].onclick = liClicked;
     //    lis[i].onmousemove = liHovered;
     }

}