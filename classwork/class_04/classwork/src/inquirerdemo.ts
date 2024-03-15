import inquirer from "inquirer";

let name = await inquirer.prompt([
    {
        name: "inputName",
        type: "text",
        message: "Enter Your Name:"
    }
]);
console.log(`Welcome ${name.inputName}`);