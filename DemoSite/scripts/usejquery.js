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

    var lis = $("li");
    lis.click(function () {
        //var d1 = document.getElementById("divOne");
        var t = $(this);
        alert(t.text());
        $(this).siblings(".redThing").prev().hide(1000);
        var par = $(this).parent();
        //var pars = $(this).parents();
        par.find(".blueThing").text("A Blue thing!!!");
        par.find(".greenThing").append("- is green.");
        var nLi = $("<li>New Item</li>");
        nLi.addClass("greenThing");
        par.children().last().after(nLi);
    });

    //$("li").click(function () {
    //    alert(this.innerText);
    //});

    //var nlis = document.getElementsByTagName("li");
    //for (var i = 0; i < nlis.length; i++) {
    //    nlis[i].onclick = function () {
    //        alert(this.innerText);
    //    };
    //}
    

    

});