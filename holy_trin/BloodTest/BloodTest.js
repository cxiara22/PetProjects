
const person1 = {
    name:"Andy",
    surname:"Wood",
    bloodType:"AB",
    eat:function(){
        return this.name + this.surname + " is eating.";
    }
};

function Person(first, last, age, blood) {
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.bloodType = blood.toLowerCase().toString(); 
    this.fullName = function(){
        return this.firstName + " " + this.lastName; 
    }; 
    this.possibleDonors = function(){
        if (this.bloodType == "ab") {
            return "o, a, b, ab"; 
        }
        else if (this.bloodType == "a"){
            return "o, a"; 
        }
        else if (this.bloodType == "b"){
            return "o, b"; 
        }
        else {
            return "o"; 
        }
    }; 
}

function displayResult (p1, p2, isCompatible) {
    if (isCompatible) {
        console.log(`${p1.fullName()} and ${p2.fullName()} are compatible`); 
    } else {
        console.log(`${p1.fullName()} and ${p2.fullName()} are incompatible`); 
    }
}

function Compatible (p1, p2, callback) {
    const test = [p1.bloodType, p2.bloodType]; 
    let result = false; 

    if(test[0] == test[1] || test.indexOf("ab") != -1){
        result = true; 
    }     
    else if (test.indexOf("a") != -1 || test.indexOf("b") != -1) {
        if (test.indexOf("o") != -1) {
            result = true; 
        }
    }
    callback(p1,p2,result); 
} 

const Sandy = new Person ("Sandy", "Mok", 22, "A"); 
const Ben = new Person ("Ben", "Choi", 56, "o"); 
const Jane = new Person ("Jane", "Corry", 18, "B"); 
const Zanne = new Person ("Zanne", "Mok", 22, "A"); 

Compatible(Jane, Sandy, displayResult); 
Compatible(Ben, Sandy, displayResult); 


// console.log(Jane.bloodType); 
// console.log(Sandy.fullName()); 
// console.log(Sandy.possibleDonors()); 

// Zanne.nationality = "Malaysian"; 
// Person.prototype.nationality = "Singaporean"; 
// console.log(Sandy.nationality); 
// console.log(Zanne["nationality"]);  
// console.log("Hello"); 

// console.log(...Object.getOwnPropertyNames(Person)); 
// console.log(Person.prototype); 

// console.log(person1["name"]); 
// console.log(person1.surname); 
// console.log(person1.eat()); 