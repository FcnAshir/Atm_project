#!/usr/bin/env node
import inquirer from "inquirer"
let mybalance = 10000
let mypin = 1234
 let pinanswer = await inquirer.prompt([{
    name:"Pin",
    message:"Enter your pin",
    type:"number"

 }]);
 if(pinanswer.Pin === mypin){
    console.log("Correct pin code !!!");
    
 
 let operationanswer = await inquirer.prompt([
    {
        name:"operator",
        message:"please select option",
        type:"list",
        choices:["Withdraw","Check blance"],
    }
 ]
 )
 if(operationanswer.operator ==="Withdraw"){
    let amountans = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]
        
    )
    mybalance-= amountans.amount
    console.log("Your remainig balance is : "+ mybalance)
 }
 else if(operationanswer.operator==="Check blance"){
    console.log (`Your balance is:${mybalance}`)
 }

 }

else{
    console.log("Incorect pin number")
}




