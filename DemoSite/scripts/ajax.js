$(document).ready(function () {
    $("#btnShowPerson").click(function () {
        $.ajax({
            //url: "data/person.json",
            url: "data/other.json",
            success: function (data) {
                alert(data.lastName);
            },
            error: function (obj, mess, messObj) {
                //messObj.
                if (obj.status == 404) {
                    alert("File not found.");
                } else {
                    alert("Some other error.");
                }
                //alert("I could not get the file: " + mess);
            }
        });
        //alert("I was clicked");
    });

    $("#btnShowPeoples").click(function () {
        $.ajax({
            url: "data/people.json",
            success: function (data) {
                // add people to table.
                //for (var i = 0; i < data.people.length; i++) {
                //    alert(data.people[i].firstName);
                //}
                var trh = $("<tr>");
                trh.append($("<th>").text("First Name"));
                trh.append($("<th>").text("Last Name"));
                trh.append($("<th>").text("Age"));
                $("#tblPeople").append(trh);
                var count = 0;
                $.each(data.people, function (ndx, obj) {
                    //alert(obj.firstName);
                    //var td = $("<td>").text(obj.firstName);

                    //if (obj.age >= 18) {
                        var tr = $("<tr>");
                      //  if (count % 2 === 0) tr.addClass("other");
                        tr.append($("<td>").text(obj.firstName));
                        tr.append($("<td>").text(obj.lastName));
                        tr.append($("<td>").text(obj.age));
                        $("#tblPeople").append(tr);
                        count++;
                    //}
                    //$("#tblPeople").append($("<tr>")
                    //    .append($("<td>").text(obj.firstName)));
                });
            }
        });
    });

    $("#btnAddRows").click(function () {
        $.ajax({
            url: "data/rows.html",
            statusCode: {
                404: function() {
                    alert("File not found");
                },
                503: function () {
                    alert("Server Error");
                }
            },
            success: function (data) {
                $("#tblCharacters").append(data);
            },
            error: function (o, e) {
                alert("oops");
            }
        });
    });

    //$("#btnSendIt").click(function () {
    //    $.ajax({
    //        url: "http://teaching.jdholmes.net/postvget/reader/",
    //        //data: ,
    //        success: function (data) {
    //            $("#divOutput").append(data);
    //        },
    //        error: function (o, e) {
    //            alert("oops");
    //        }

    //    });
    //});

    $("#btnSearch").click(function () {
        $.ajax({
            url: "data/people.json",
            //data: ,
            success: function (data) {
                $("#divOutput").empty();
                $.each(data.addresses, function (ndx, obj) {
                    var src = $("#txtSearch").val();
                    var ans = obj.indexOf(src);
                    if (ans >= 0) {
                        $("#divOutput").append($("<p>").append(obj + "(" + ans + ")"));
                    }
                });

                //$("#divOutput").append("I got the data");
            },
            error: function (o, e) {
                alert("oops");
            }

        });
    });



});