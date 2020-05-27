
// function sayHello(person: string): string{
//     return "Hello, " + person;
// }
// var user = "Super Student";
// document.getElementById("id1").textContent = sayHello(user);

    //interface function
    interface PersonOptions{
        firstName: string;
        lastName: string;
        age?: string;
        phoneNum?: string;
        state?: string;
        zipCode?: string;
        occupation?: string;
        hourly?: number;
    }

   // new Person class
   class Person{
       private firstName: string;
       private lastName: string;
       private  age: string;
       private  phoneNum: string;
       private state: string;
       private zipCode: string;
       private occupation: string;
       private hourly: number;
       private certs: string[];

       constructor(firstName: string, lastName: string, age?: string, phoneNum?: string, state?: string, zipCode?: string, occupation?: string, hourly?: number){
           this.firstName = firstName;
           this.lastName = lastName;
           this.age = age;
           this.phoneNum = phoneNum;
           this.state = state;
           this.zipCode = zipCode;
           this.occupation = occupation;
           this.hourly = hourly;
       }

       //setters and getters

       getFirstName(): string{
           return this.firstName;
       }
       setFirstName(firstName: string): void{
           this.firstName = firstName;
       }

       getLastName(): string{
           return this.lastName;
       }
       setLastName(lastName: string): void{
           this.lastName = lastName;
       }

       getAge(): string{
           return this.age;
       }
       setAge(age: string): void{
           this.age = age;
       }

         getPhoneNum(): string{
           return this.phoneNum;
       }
       setPhoneNum(phoneNum: string): void{
           this.phoneNum = phoneNum;
       }

       getState(): string{
           return this.state;
       }
       setState(state: string):void{
           this.state = state;
       }

       getZipCode(): string{
           return this.zipCode;
       }
       setZipCode(zipCode: string): void{
           this.zipCode = zipCode;
       }

       getOccupation(): string{
           return this.occupation;
       }
       setOccupation(occupation: string): void{
           this.occupation = occupation;
       }

       getCerts(): string[]{
           return this.certs;
       }


       //other methods

       getFullName(): string{
           return this.firstName + " " + this.lastName;
       }
       
       getLocation(): string{
           return this.state + " " + this.zipCode;
       }

  

       //function to calculate weekly wage and takes the number of hours as parameters
        getWeeklyRate(hours?: number): number{
           if(hours){
               return this.hourly * hours;
           }else {
               return this.hourly * 40;
           }
       }
       //function to get name and wage
       getHourlyWage(wage?: number): string{
           if(wage){
               return this.getFullName() + " " + this.getWeeklyRate(wage).toString();
           }else {
               return this.getFullName() + " weekly wage: $" + this.getHourlyWage().toString(); 
           }
       }

       //creating a property of a person's certifications/degrees that is an array
       //can be things such as MBA, CSM, MCSD, etc.
       addCerts(certs: string[]): void{
           for(let cert in certs){
               certs.push(cert);
           }
           this.certs = certs;
       }

            //interface method
            static createPerson(person: PersonOptions): Person{
                let newPerson = new Person(person.firstName, person.lastName);
                if(person.firstName){
                    newPerson.firstName;
                }
                if(person.lastName){
                    newPerson.lastName;
                }
                return newPerson;
            }


}//end of Person class



//outputs
var tom = new Person("Tom", "Brady", "42", "7041234555", "NC", "28262", "NFL QB", 30);
var peyton = new Person("Peyton", "Manning", "44", "7045552222", "NC", "28202", "Media Analyst", 15);
var wade = new Person("Dwyane", "Wade", "37", "7042928222", "CA", "90210", "NBA HOF", 25);

document.getElementById("id2").textContent = tom.getFullName();
document.getElementById("id3").textContent = peyton.getOccupation();
document.getElementById("id4").textContent = wade.getAge();
document.getElementById("id5").textContent = Person.createPerson({firstName: "Jack", lastName: "Sparrow"}).getFullName();

