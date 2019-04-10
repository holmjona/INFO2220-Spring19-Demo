$(document).ready(function () {
    $("form").submit(function (e) {
        e = e || window.event;
        //alert(this);
        var txtName = this["txtName"];
        var txtAge = this["txtAge"];
        var txtPhone = this["txtPhone"];


        //$("#tblOutput").append("<tr><td>"
        //    + txtName.value + "</td></tr>");

        //var td = $("<tr><td>"
        //    + txtName.value + "</td></tr>");

        //$("#tblOutput").append(td);

        var tr = $("<tr>");
        var tdName = $("<td>").addClass("name");
        tdName.text(txtName.value);
        tr.append(tdName);

        var tdAge = $("<td>").addClass("age");
        tdAge.text(txtAge.value);
        tr.append(tdAge);

        var tdPhone = $("<td>").addClass("phone");
        tdPhone.text(txtPhone.value);
        tr.append(tdPhone);

        tr.on("mouseover", function () {
            $(this).addClass("selected");
        }).mouseleave(function () {
            $(this).removeClass("selected");
        });

        $("#tblOutput").append(tr);


        e.preventDefault();
        return false;
    });
});