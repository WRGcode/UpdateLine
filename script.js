"use strict";
class User{
    constructor(idCount, firstName,lastName,DoB,departing,arriving,leaveDate,returnDate,bags,chicken,fish,vegetian,legroom,headphones,morefood,window){
        this.firstName = firstName
        this.lastName = lastName
        this.DoB = DoB
        this.departing = departing
        this.arriving = arriving
        this.leaveDate = leaveDate
        this.returnDate = returnDate
        this.bags = bags
        this.chicken = chicken
        this.fish = fish
        this.vegetian = vegetian
        this.legroom = legroom
        this.window = window
        this.headphones = headphones
        this.morefood = morefood
        this.idCount = idCount
    }
}
 let userList = []
 let idCount = 1;
 let cost =360;
 let tripLenth = 0;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let bags = document.getElementById("bags").value;
    let chicken = document.getElementById("chicken").value;
    let fish = document.getElementById("fish").value;
    let vegetian = document.getElementById("vegetian").value;
    let legroom = document.getElementById("legroom").value;
    let window = document.getElementById("window").value;
    let headphones = document.getElementById("headphones").value;
    let morefood = document.getElementById("morefood").value;


if(firstName != "" && lastName != ""){
    let User = new list(firstName,lastName,DoB,departing,arriving,leaveDate,returnDate,bags,chicken,fish,vegetian,legroom,headphones,morefood,window)
idCount++;
userList.push(User);
document.getElementById("firstName").value
document.getElementById("lastName").value
document.getElementById("DoB").value
document.getElementById("departing").value
document.getElementById("arriving").value
document.getElementById("leaveDate").value
document.getElementById("returnDate").value
document.getElementById("bags").value
document.getElementById("chicken").value
document.getElementById("fish").value
document.getElementById("vegetian").value
document.getElementById("legroom").value
document.getElementById("headphones").value
document.getElementById("morefood").value
document.getElementById("window").value
    }
}

function drink(){
    let birth = new Date(Date.parse(DoB))
    let today = Date.now()
    let age = today - birth;
    let normal = new Date(age)
    normal = normal.getFullYear()

    if(normal >= 21){
        drink = true
    }
}

function vacTime(){
    let leave = new Date()
}