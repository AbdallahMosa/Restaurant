"use strict";
var idCont  = 1000;
 var allMneu =[]
const body = document.getElementsByTagName("body");
function Mneu(foodName,typeOfFood,price){
    this.foodId= function(){
        var counter=idCont
        idCont++
         return counter;
     };
     this.foodName = foodName;
     this.typeOfFood = typeOfFood;
     this.price = price;

     allMneu.push(this)
    }

    let form  = document.getElementById("form")

       form.addEventListener("submit", handleSubmit)

    function handleSubmit(event){
        event.preventDefault();
       
        let name = event.target.foodName.value;
        let typeOfFood = event.target.typeOfFood.value;
        let price = event.target.price.value;

        const newMenu = new Mneu(name,typeOfFood,price)
        newMenu.render();
    } 
    Mneu.prototype.render =  function(){

        for (let i = 0; i < allMneu.length; i++) {
           const id1 = document.getElementById('id1')
           const name1 = document.getElementById('name1')
           const type1 = document.getElementById('type1')
           const price1 = document.getElementById('price1')
           id1.textContent= `${this.foodId()}`
           name1.textContent = `${this.foodName}`
           type1.textContent = `${this.typeOfFood}`
           price1.textContent= `${this.price}`
           allMneu[i].render
        }
    }
   
        
    //  for (let i = 0; i < allMneu.length; i++) {
    //    allMneu[i].render
        
    //  }


     
   