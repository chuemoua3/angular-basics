function sayHello(person: string): string {
    return "Hello, " + person;
   }
   var user = "Super Student";
   document.getElementById("para").innerHTML = sayHello(user);


   // new Person class
   class Person{
       private firstName: string;
       private lastName: string;
       private  age: number;
       private  phoneNum: number;
       private state: string;
       private zipCode: number;
       private occupation: string;
       private hourly: number;

       constructor(firstName: string, lastName: string, age: number, phoneNum: number, state: string, zipCode: number, occupation: string){
           this.firstName = firstName;
           this.lastName = lastName;
           this.age = age;
           this.phoneNum = phoneNum;
           this.state = state;
           this.zipCode = zipCode;
           this.occupation = occupation;
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

       getAge(): number{
           return this.age;
       }
       setAge(age: number): void{
           this.age = age;
       }

         getPhoneNum(): number{
           return this.phoneNum;
       }
       setPhoneNum(phoneNum: number): void{
           this.phoneNum = phoneNum;
       }

       getState(): string{
           return this.state;
       }
       setState(state: string):void{
           this.state = state;
       }

       getZipCode(): number{
           return this.zipCode;
       }
       setZipCode(zipCode: number): void{
           this.zipCode = zipCode;
       }

       getOccupation(): string{
           return this.occupation;
       }
       setOccupation(occupation: string): void{
           this.occupation = occupation;
       }

       //other methods

       getFullName(): string{
           return this.firstName + " " + this.lastName;
       }
       
       getLocation(): string{
           return this.state + " " + this.zipCode;
       }



       


}