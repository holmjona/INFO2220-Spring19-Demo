/*alert("Intro File");*/

var a = 1;
var b = 2;
var c = "Hello";
var d = true;
var e = 1e14;
var f = 'g';
var g = 'We are "sick"!';
var gg;

//alert("" + a + b);

//alert(typeof a);
//alert(typeof b);
//alert(typeof c);
//alert(typeof d);
//alert(typeof e);
//alert(typeof f);
//alert(g);
//alert(gg);

var h = [];
var i = [1,2,3,"4",5,6,7,8];

//alert(typeof h);
//alert(typeof (i));

var j = 0;
for (var k  = 0; k < i.length; k++) {
    //alert(typeof i[k]);
    j += i[k];
}

//alert(h);
//alert(i);
//alert(j);

var l = [];

l.push("A");
l.push("B");
l.push("C");
l.push("D");
l[l.length] = "E";
l[l.length] = "F";
//alert(m);
//alert(l);
//var m = l.pop();
l.unshift("Z");
//alert(l[4]);
//alert(l);
//alert(m);

function function1(a) {
    a = 634;
    alert(a);
}

//function1(a);
//alert(a);
function function2() {
    return 25;
}
var n = function2();

//alert(n);


var o = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
     "November",
     "December"
);   
//alert(o[12]);
//for (var pp = 0; pp < o.length; pp++) {
//    var mini = o[pp];
//    //alert(mini[1]);
//    if (mini[0] % 2 === 0) {
//        alert(mini[1] + " is an odd month.");
//    }
//}
//alert(o);

//var numOfMonths = 0;
//numOfMonths += 194;
//alert(o[numOfMonths % 12]);

var p;
do {
    p = prompt("What is your Name?");
} while (p === ""
    || typeof p === "undefined"
    || p === null);

alert("Your name is: " + p);

