//var objList = document.getElementById("objectList");

//alert(objList.innerText);

function moveToGroup1(obj) {
    youveGotToMoveItMoveIt(obj, "listOne");
}

function moveToGroup2(obj) {
    youveGotToMoveItMoveIt(obj, "listTwo");

}

function moveToGroup3(obj) {
    youveGotToMoveItMoveIt(obj, "listThree");

}


function youveGotToMoveItMoveIt(obj, listName) {
    //var owner = arguments[0];
    var dMove = document.getElementById("divMove");
    //alert(dMove.children.length);
    var lOne = document.getElementById(listName);
    //var tNode = window.document.createTextNode("Wagon");
    var liNode = document.createElement("li");
    //liNode.innerText = "Wagon";
    //liNode.appendChild(tNode);
    var parNode = obj.parentNode;
    var uncNode;// = getPrevious(parNode);
    uncNode = parNode.previousElementSibling;
    // alert(uncNode.innerText + " | " + uncNode.innerHTML);

    if (uncNode.children[0].tagName === "FORM") {
        var txt = document.getElementById("txtInput");
        liNode.innerText = txt.value;

    } else {
        liNode.innerHTML = uncNode.innerHTML;
    }
    //liNode.innerText = uncNode.innerText;
    //liNode.appendChild(uncNode.children[0])

    lOne.appendChild(liNode);
}

function getPrevious(o) {
    var p = o.previousSibling;
    if (o.NodeType === NodeType.TEXT) {
        return getPrevious(p.previousSibling);
    } else
        return p;
}