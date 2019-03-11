var timer;
var timer2;
var init2;

$(document).ready(function () {
    //alert("Page Loaded");
    // Jquery always returns an array
    var jDiv1 = $("#divOne");
    // Call jQuery .eq() returns an array
    var jDiv2 = $("#divTwo").eq(0);
    // not a jquery call so returns the node.
    var jDiv3 = $("#divThree")[0];

    jDiv1.click(function () {
        //alert("Clicky 1");
        $(".redThing").show(2000);
    });


    jDiv2.click(function () {
        //alert("Clicky2");
        $(".greenThing").show(2000);

    });

    $(jDiv3).click(function () {
        $(".blueThing").show(2000);
    });

    //jDiv2.click(function () {
    //    alert("Clicky Again");
    //});


    //jDiv3.onclick =function () {
    //    alert("Clicky  Three");
    //};

    //var lis = $("li");
    //lis.click(function () {
    //    //var d1 = document.getElementById("divOne");
    //    var t = $(this);
    //    alert(t.text());
    //    $(this).siblings(".redThing").prev().hide(1000);
    //    var par = $(this).parent();
    //    //var pars = $(this).parents();
    //    par.find(".blueThing").text("A Blue thing!!!");
    //    par.find(".greenThing").append("- is green.");
    //    var nLi = $("<li>New Item</li>");
    //    nLi.addClass("greenThing");
    //    par.children().last().after(nLi);
    //});

    //$("li").click(function () {
    //    alert(this.innerText);
    //});

    var nlis = document.getElementsByTagName("li");
    for (var i = 0; i < nlis.length; i++) {
        nlis[i].onclick = function () {
            alert(this.innerText);
            var chld = this.parentNode.children;
            var newChildren = [];
            for (var ic = 0; ic < chld.length; ic++) {
                var classes = chld[ic].classList;
                if (this !== chld[ic]) {
                    for (var cn = 0; cn < classes.length; cn++) {
                        if (classes[cn] === "redThing") {
                            newChildren.push(chld[ic].previousSibling.previousSibling);
                        }
                    }
                }
            }

            for (var nc = 0; nc < newChildren.length; nc++) {
                newChildren[nc].style.display = "none";
            }

        };

        document.getElementById("btnHide").onclick = function () {
            var ul = document.getElementById("ulToHide");
            //$(ul.previousSibling.previousSibling).hide(2000);
            //alert(ul.clientHeight + " = = = " + ul.offsetHeight);
            var h = ul.clientHeight; 
            //while (h > 0) {
            //    h -= 1;
            //    ul.style.height = h + "px";
            //    ul.style.overflow = "hidden";
            //}
            //setTimeout(shrinkIt, 1000);
            timer = setInterval(shrinkIt, 10);
            timer2 = setInterval(shrinkIt2, 100);


        };

    }
});

function shrinkIt() {
    //alert("I fired");
    //var nNode = document.createElement("li");
    //nNode.innerText = "Added";
    //document.getElementById("ulToHide")
    //    .appendChild(nNode);
    var ul = document.getElementById("ulToHide");
    var h = ul.clientHeight;
    //alert(h);
    h *= .9;
    ul.style.height = h + "px";
    ul.style.overflow = "hidden";
    if (h <= 0) clearInterval(timer);
}
function shrinkIt2() {
    //alert("I fired");
    //var nNode = document.createElement("li");
    //nNode.innerText = "Added";
    //document.getElementById("ulToHide")
    //    .appendChild(nNode);
    var ul = document.getElementById("ulToHide").previousSibling.previousSibling;
    var h = ul.clientHeight;
    if (typeof init2 === 'undefined') {
        init2 = ul.clientHeight * .1;
    }
    //alert(h);
    h -= init2;
    ul.style.height = h + "px";
    ul.style.overflow = "hidden";
    if (h <= 0) {
        clearInterval(timer);
        init2 = undefined;
    }
}
