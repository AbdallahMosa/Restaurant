"use strict";
var idCont  = 1000;
 var allMneu =[]
const body = document.getElementsByTagName("body");
const table = document.getElementById("table");
function Mneu(foodName,typeOfFood,price){
    this.foodId= function(){
        var counter=idCont
        idCont++
         return counter;
     };
     this.foodName = foodName;
     this.typeOfFood = typeOfFood;
     this.price = price;
        // this.render();
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
        // newMenu.render();
        setData(allMneu)

      
    } 
  function setData (data){
            let dataString = JSON.stringify(data)
            localStorage.setItem("storageMenu",dataString)

        }
    function getData (){
        let returnData = localStorage.getItem("storageMenu") 
        let arrayData = JSON.parse(returnData)
        if (arrayData != null) {
            
       
        for (let i = 0; i < arrayData.length; i++) {
           new Mneu(
            arrayData[i].foodId,
            arrayData[i].foodName,
            arrayData[i].typeOfFood,
            arrayData[i].price
            );
            
        } }}
//     }
//     Mneu.prototype.render =  function(){


//         let tr1 = document.createElement("tr");
//         table.appendChild(tr1);
//         let td1 = document.createElement("td")
//         td1.textContent = this.foodId();
//         tr1.appendChild(td1);
//         let td2 = document.createElement("td")
//         td2.textContent = this.foodName;
//         tr1.appendChild(td2);
//         let td3 = document.createElement("td")
//         td3.textContent = this.typeOfFood;
//         tr1.appendChild(td3);
//         let td4= document.createElement("td")
//         td4.textContent = this.price;
//         tr1.appendChild(td4);

//     }
// getData()
// for (let i = 0; i < allMneu.length; i++) {
//     allMneu[i].render();
    
// }








        

     
   