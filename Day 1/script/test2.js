console.log("Test 2");
//object literal
let dog={
    name: "rocky",
    age:1,
    run: function(){
        console.log(this.name+" is running!");
    }
}

console.log(dog);

let cat={
    name: "Smokey",
    age:10,
    run: function(){
        console.log(this.name+" is running!");
    }
}

console.log(cat);
//object constructor
function Animal(n,a,o){
    this.name=n;
    this.age=a;
    this.owner=o;
}

let dog1=new Animal("Scooby", 15, "Shaggy");
console.log(dog1);

let cat1=new Animal("Wiskers", 2, "Eric`");
console.log(cat1);
