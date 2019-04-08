$(document).ready(function () {
    $(".accordian").accordion();
    $(".tabs").tabs({ show: { effect: "blind", duration: 3000 } });
    $("#listItems li").draggable({
        classes: { "ui-sortable-helper": "selected" },
        revert: true
    });
    $("#listOne").droppable({
        accept: ".redThing",
        drop: droppy
    });

    $("#listTwo").droppable({
        accept: ".greenThing",
        drop: droppy
    });

    $("#listThree").droppable({
        accept: ".blueThing",
        drop: droppy
    });


    function droppy(e, ui) {
        var obj = ui.draggable[0];
        $(this).append(obj);
        obj.style = "";
    }
});
