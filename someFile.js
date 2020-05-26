function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
// new Person class
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNum, state, zipCode, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
    }
    //setters and getters
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhoneNum = function () {
        return this.phoneNum;
    };
    Person.prototype.setPhoneNum = function (phoneNum) {
        this.phoneNum = phoneNum;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    //other methods
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getLocation = function () {
        return this.state + " " + this.zipCode;
    };
    return Person;
}());
