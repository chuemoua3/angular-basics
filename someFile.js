function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
// new Person class
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNum, state, zipCode, occupation) {
        this.firstNname = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
    }
    return Person;
}());
