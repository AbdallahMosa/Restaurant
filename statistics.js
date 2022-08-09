"use strict";
    const allMneu=[];
    var idCont = 1000;
const tab = document.getElementById("table1")

// console.log(localStorage.getItem)
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

function getStatisticsData (){
    let returnData = localStorage.getItem("storageMenu") 
    let arrayData = JSON.parse(returnData)
    if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
        new Mneu(
       
         arrayData[i].foodName,
         arrayData[i].typeOfFood,
         arrayData[i].price
         );

}}}

getStatisticsData();

Mneu.prototype.render =  function(){


    let tr1 = document.createElement("tr");
        tab.appendChild(tr1);
    let td1 = document.createElement("td")
    td1.textContent = this.foodId();
    tr1.appendChild(td1);
    let td2 = document.createElement("td")
    td2.textContent = this.foodName;
    tr1.appendChild(td2);
    let td3 = document.createElement("td")
    td3.textContent = this.typeOfFood;
    tr1.appendChild(td3);
    let td4= document.createElement("td")
    td4.textContent = this.price;
    tr1.appendChild(td4);

}
for (let i = 0; i < allMneu.length; i++) {
    allMneu[i].render();
    
}
// let trS = document.createElement("tr")
// tab.appendChild(trS)
// let tdS = document.createElement("td")
// tdS.textContent = arrayData[0];
// trS.appendChild(tdS);
// let tdS1 = document.createElement("td")
// tdS1.textContent = arrayData[1];
// trS.appendChild(tdS1);
// let tdS2 = document.createElement("td")
// tdS2.textContent =arrayData[2];
// trS.appendChild(tdS2);
// let tdS3 = document.createElement("td")
// tdS3.textContent = arrayData[3];
// trS.appendChild(tdS3);