// PLAYING WITH INHERITANCE

// CREATES THE "CLASS" PERSON
function Person(name, age, gender) {
    this.dna = 'DNA PERSON';
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.option = true;
    this.hardCodeIt = function(){
        return console.log(this.name +' has '+ this.age +' years old, is a '+ this.gender +' and is coding like an animal.');
    }
}

// CREATE THE STUDENT CLASS AND INHERIT THE PERSON CLASS INTO IT
function Student(name, age, gender){
    // this.prototype = new Person()
    Person.apply(this,[name,age,gender]);
    this.hardCodeIt = function(){
        return console.log(this.name +' has '+ this.age +' years old , is a '+ this.gender +' and still a fucking teenager');
    }
}


Student.prototype.constructor = Student;
Student.prototype.dna = 'DNA STUDENT';
Student.prototype.option = false;
Student.prototype.hardCodeIt = function(){
    return console.log('OUTSIDE: '+ this.name +' has '+ this.age +' years old , is a '+ this.gender +' and still a fucking teenager');
}


// var Galvao = new Person('Galvao', 28, 'Man');
var Galvao = new Student('Wanderleia', 63, 'Woman');
console.log(Galvao.dna);
Galvao.hardCodeIt();
console.log(Galvao.option);
