function Person(fName,lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.favColor = arguments[2];
    this.fullName = makeFullName;
    this.classMate;
    this.nameAndColor = getNameAndColor;
    this.formattedName = function () {
        return this.lastName + ", " + this.firstName;
    };

    function getNameAndColor() {
        return this.firstName +
            ": " + this.favColor;
    }

    this.getClassMateName = function () {
        if (typeof this.classMate !== "undefined") {
            return this.classMate.fullName();
        } else {
            return "no class mate.";
        }
    };
    return this.firstName;
}


function makeFullName() {
    return this.firstName + " " + this.lastName;
}


var pplArray = [
    new Person("Jay","Dog","Blue"),
    new Person("Hunter","Sky","Forest Green"),
    new Person("Curtis","Barnes","Red"),
    new Person("Cordell","Walker","Green"),
    new Person("Jon","CoolDaddio"),
    new Person("Makayla","AwesomeSauce","Gray")
];

pplArray[1].classMate = pplArray[3];

var fun = Person;
var funO = new Person();

//alert(typeof fun.prototype + " | " + typeof fun.__proto__  );
//alert(typeof funO.prototype + " | " + typeof funO.__proto__  );

//var outString = "";
//for (var i = 0; i < pplArray.length; i++) {
//    var pp = pplArray[i];
//    //alert(pp.formattedName(pp.lastName,pp.firstName));
//    alert(pp.formattedName() + "\r\n" +
//        pp.nameAndColor() + "\r\n" +
//        pp.fullName() + "\r\n" +
//        pp.getNameAndColor + "\r\n" +
//        pp.getClassMateName());
//}

//alert("ob2 from 1 is : " + typeof ob2);