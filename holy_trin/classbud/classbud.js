
// //EX1) swapping values of variables  
// let a = 1; 
// let b = 2; 
// let c = 3; 
// [a, b, c] = [b, c, a]; 
// console.log(a); // value of a is now 2
// console.log(b); // value of b is now 3
// console.log(c); // value of c is now 1 --> saying let c = a

//EX2) swap 2 elements in an array 
// const colours = [`r`,`b`,`g`,`bk`,`w`]; 

// [colours[1], colours[4]] = [colours[4], colours[1]]; 
// console.log(colours); //result is ['r', 'w', 'g', 'bk', 'b']

// [colours[0],colours[3]] = [`invisi`,colours[0]]; 
// console.log(colours); //result is ['invisi', 'w', 'g', 'r', 'b']

// // EX3) assign array elements to variables (combine w rest parameters)
const colours = [`r`,`b`,`g`,`bk`,`w`]; 

const [firstCol, secondCol, thirdCol, ...rest] = colours;  
console.log(rest); // returns ['bk', 'w']
console.log(colours); // returns ['r', 'b', 'g', 'bk', 'w']

// EX4) extract values from objects 
class Person {
    static population = 0; 

    constructor (firstName, lastName, age, job) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.age = age; 
        this.job = job; 
        Person.population ++; 
    }

    set firstName(newName) {
        if (typeof newName == "string") {
            this._firstName = newName; 
        } else {
            console.error(`${newName}'s name must be of type String!`); 
        }
    }

    get firstName(){
        return this._firstName; 
    }

    set lastName(newName) {
        if (typeof newName == "string") {
            this._lastName = newName; 
        } else {
            console.error(`${this.firstName}'s name must be of type String!`); 
        }
    }

    get lastName(){
        return this._lastName; 
    }

    get fullName(){
        return this.firstName +" "+this.lastName; 
    } 
}

class Student extends Person {
    constructor (firstName, lastName, age, school, course) {
        super (firstName, lastName, age); 
        this.job = "student"; 
        this.school = school; 
        this.course = course; 
    }
}

const Manny = new Student (`Manny`,`Cali`,14,`California Public High`,`Art`); 
const Chloe = new Student (`Chloe`,`Tan`,`19`,`NTU LKC`,`medicine`)
const Duane = new Person (`Duane`,`Shaw`,15,`pilot`); 
const Sarah = new Person (`Sarah`,`Loy`,15,`surgeon`); 
const Carrey = new Person (`Carrey`,`Mariah`,15,`chemist`); 


// // EX4) extract values from objects 
// const {firstName,lastName,age,job} = Sarah; 
// console.log(firstName,lastName,age,job); 
// //destructuring of objects is with curly braces
// const {firstName,lastName,age,job,sex="f"} = Sarah; 
// console.log(firstName,lastName,age,job,sex); 

console.log(Manny.firstName); 
console.log(Manny.job); 
console.log(Duane.fullName); 
console.log(Person.population); 
console.log(Chloe.school); 

// EX5) destructure in function parameters
function displayPerson ({firstName,lastName,age,job,school="NA",course="NA"}){
    console.log(`Name : ${firstName} ${lastName}`); 
    console.log(`Age : ${age}`); 
    console.log(`Student's school / course : ${school} / ${course}`); 
}

displayPerson(Chloe); 
// properties belonging to school and course will override the default NA
displayPerson(Carrey); 





