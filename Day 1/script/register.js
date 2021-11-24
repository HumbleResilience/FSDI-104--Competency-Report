
console.log("Register page");
//Javascript objects

let salon={
    name:"Pet Salon",
    address:{
        street:"University",
        number: "855-k",
        zip: "55555",
        state: "AR",
        city: "Little Rock"

    },
    hours:{
        open: "9:00 am",
        close: "8:00 pm"
    },
    pets:[]
}
//create a Pet constructor
let x=0;
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=x++;
}
    // create three pets using the constructor
    let Scooby=new Pet("Scooby", 14, "Male", "German Shepard", "Grooming","Shaggy","870555555");
    let Wayne=new Pet ("Wayne", 1, "Male","Pit Bull", "Nail clipping", "Eric", "870555555" );
    let Zebra=new Pet("Stripes", 32, "Female", "Zebra", "Bath", "Eric", "870555555");
    salon.pets.push(Scooby,Wayne, Zebra);
    console.log(salon.pets);
    displayCards(Scooby);
    displayCards(Wayne);
    displayCards(Zebra);

//get the values from the input
let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");
let txtSearch=document.getElementById("searchPet");

function register(){
    //create a constructor using the values of the input.
    let newPet = new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value )
    //push it into the array
    salon.pets.push(newPet)
    //display the pet on the console
    console.log(salon.pets);
    displayCards(newPet)
    //clear the inputs
    clear();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtSearch.value="";
}

function simpleDisplay(){
    //Display Scooby on the console
    for(let i=0; i<salon.pets.length; i++){
    console.log(salon.pets[i].name);
}
}


function deletePet(petId){
    console.log("Delete "+ petId);
    let indexDelete;
    //search the pet in order to remove it from array
    for(let i=0; i<salon.pets.length; i++){
        let pet=salon.pets[i];
        if(petId===pet.id){
             indexDelete=i;
        }
    }

    //delete from html
    document.getElementById(petId).remove();
    //delete from the array
    salon.pets.splice(indexDelete,1);
}   

function searchPet(){
   let searchString=document.getElementById("txtSearch").value;
   for(let i=0; i<salon.pets.length; i++){
       if(searchString==salon.pets[i].name){
           document.getElementById(salon.pets[i].id).classList.add("highlight");
       }
   }
   console.log(searchString);

 }



