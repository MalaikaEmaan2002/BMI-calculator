import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message:"enter your weight in kg",
    type: "number",
    name: "weight",
},
{message: "enter your height in meter",
type: "number",
name: "height", }    
]);
let BMI = answer.weight/ (answer.height*answer.height);
console.log(`your BMI is${BMI}`);