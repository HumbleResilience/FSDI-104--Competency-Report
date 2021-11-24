
//objects
let eric={
    name: "Eric",
    email: "eric@gmail.com",
    gpa: 3.9
}

let david={
    name: "David",
    email:"david@gmail.com",
    gpa: 4.0
}

let davion={
    name:"Davion",
    email: "davion@gmail.com",
    gpa: 4.0

}

let will={
    name: "Will",
    email: "will@gmail.com",
    gpa: 3.9
}
let students=[eric, david, davion, "Will", "Mark", "Michael", "Regis", "Brandon"];
console.log(students[3]);
students[3]="Miguel";
console.log(students);





//travel the array 
for(let i=0; i<students.length; i++){
    document.write(`<li>${students[i]}</li>`);
    console.log(students[i]);
}


let gpas=[2.4,3.1,4.0,3.6,2.9,2.8];
//travel the array
let total=0;
for (let j=0; j<gpas.length; j++)
{
    document.write(`<li>${gpas[j]}</li>`);
    total=total+gpas[j];
    console.log(`iteration: ${j} = ${total}`);
}



