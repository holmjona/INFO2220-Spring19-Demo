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
                $.each(data.people, function (ndx,obj) {
                    alert(obj.firstName);
                });

            }

        });
    });

});