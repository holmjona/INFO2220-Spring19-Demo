var o1 = { a: 34 };
var o2 = {
    x: 45,
    y: 23,
    area: function () {
        return "area";
    }
};
//o1 = [1, 2, 3, 4];

//alert(o1);
//alert(typeof o1);

//alert("x: " + o2.x + " y: " + o2.y);
//alert(o2.area());

function fun1() {
    var a =
        typeof arguments[0] === "undefined" ?
            -1 : arguments[0];
    var b =
        typeof arguments[1] === "undefined" ?
            -1 : arguments[1];
   // return a + "" + b/* + arguments[5]*/;
    return a + "" + b;

}

//alert(fun1);//(1,2));
//alert(fun2);

//alert(fun1(1,4,3,5,2,6,3,67,3,3,43,7));
//alert(fun1(1,null,34));

//function fun1() {
//    return 10;
//}

var ob1 = {
    value1: "hello", value2: "class",
    value3 : 5
};
var ob2 = Object.create(ob1);
ob2.value1 = "goodbye";
ob2.__proto__.value2 = "everyone";
//ob1.value2 = "peoples";
ob2.value3 += 4;

//alert(ob1.value1 + " | " + ob1.value2
//    + " | " + ob1.value3
//    + "\r\n" + ob2.value1 + " | " + ob2.value2
//    + " | " + ob2.value3);

//alert("funO from 2 is : " + typeof funO);