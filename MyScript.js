// Object Literal Class

const Salon = {
    Name:"Best in Show",
    Phone: "612 867 5309",
    Address:{
        NumberS: "1234 ",
        Street: "Beverly Hills"
        

    },

    WorkingHours:{
        Days:"Mon-Sat",
        Open:"9:00 AM",
        Close: "6:00 PM"
    },

    Pets:[]


}


console.log(Salon);

let {Name, Phone, Address:{NumberS,Street},WorkingHours:{Days, Open, Close}} = Salon;

document.querySelector('.info').innerHTML=`Contact Us ${Phone}, ${NumberS} ${Street}  <br> Open ${Days} From: ${Open} To: ${Close}`;

//Object Constructor
var c=0;

class Pet{
    constructor(Name, Age, Gender, Breed, Service, OwnerName, OwnerContact){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Breed = Breed;
        this.Service = Service;
        this.OwnerName = OwnerName;
        this.OwnerContact = OwnerContact;
        this.Hunger = 10;
        this.Happiness = 5;
        this.id="Pet"+c;
        c++;
    }

    OwnerInfo = function(){
        console.log("Owner Name: " + this.OwnerName + " \n" + "Contact Phone: " + this.OwnerContact);
    }

    Feed = function(){
        this.Hunger -= 5;
        this.Happiness += 5;
        console.log("Feeding...");
    }

    Status = function(){
        console.log("Hunger: " + this.Hunger + "\n" + "Happiness: " + this.Happiness);
    }
}



var txtName = document.getElementById("txtName");
var txtAge = document.getElementById("txtAge");
var txtGender = document.getElementById("txtGender");
var txtBreed = document.getElementById("txtBreed");
var ddlService = document.getElementById("ddlService");
var txtOwnerName = document.getElementById("txtOwnerName");
var txtOwnerContact = document.getElementById("txtOwnerContact");

function Register(){
   

    const thePet = new Pet(txtName.value, txtAge.value, ddlGender.value, txtBreed.value, ddlService.value, txtOwnerName.value, txtOwnerContact.value);

    Salon.Pets.push(thePet);

    alert("You registered a new pet");
    Display(thePet);
    clear();
}

function clear(){
    txtName.value = ""; 
    txtAge.value = "";
    ddlGender.value = "";
    txtBreed.value = "";
    ddlService.value = "";
    txtOwnerName.value = "";
    txtOwnerContact.value = "";
}

function Display(PetSave){
    var tBody = document.getElementById("rowPet");

    var row = `<tr id="${PetSave.id}">
    <td> ${PetSave.Name} </td>
    <td> ${PetSave.Age} </td>
    <td> ${PetSave.Gender} </td>
    <td> ${PetSave.Breed} </td>
    <td> ${PetSave.Service} </td>
    <td> ${PetSave.OwnerName} </td>
    <td> ${PetSave.OwnerContact} </td>
    <td> <button onclick='DeletePet("${PetSave.id}")'>Delete</button></td>
    </tr>
    `;

    tBody.innerHTML+=row;
}


function DeletePet(PetID){
    var tr = document.getElementById(PetID);
    var indexDelete;

    // Search the pet using the id

    for (x=0; x < Salon.Pets.length; x++){
        var Selected = Salon.Pets[x];

        if(Selected.id === PetID){
            indexDelete = x;
        }

    }


    Salon.Pets.splice(indexDelete,1);
    tr.remove();
}

function Search(){
    var ss = document.getElementById("PetSearch").value;

    var searchString = ss.toLowerCase();

    for(var x=0; x<Salon.Pets.length;x++){
        var SearchPet = Salon.Pets[x];

        if(searchString == SearchPet.Name.toLowerCase() || searchString == SearchPet.id){
            document.getElementById("Pet"+x).setAttribute("class","selected");

        }
    }
}

