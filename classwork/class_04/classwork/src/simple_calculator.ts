import inquirer from "inquirer";
import chalk from "chalk";

let calculator = await inquirer.prompt([
    {
        name: "inputNumber1",
        type: "number",
        message: chalk.bgBlue.bold.white("Enter First Number:")
    },
    {
        name: "inputNumber2",
        type: "number",
        message: chalk.bgBlue.bold.white("Enter Second Number:")
    },
    {
        name: "selectedOperation",
        type: "list",
        choices: ["Add", "Subtract", "Multipy", "Divide", "Modulus", "Exponent"],
        message: chalk.bgBlue.bold.white("Select Operand:")
    },
]);

// Do the Operations
switch (calculator.selectedOperation) {
    case "Add": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 + calculator.inputNumber2));
        break;
    }
    case "Subtract": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 - calculator.inputNumber2));
        break;
    }
    case "Multiply": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 * calculator.inputNumber2));
        break;
    }
    case "Divide": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 / calculator.inputNumber2));
        break;
    }
    case "Exponent": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 ** calculator.inputNumber2));
        break;
    }
    case "Modulus": {
        console.log(chalk.bgRedBright(calculator.inputNumber1 % calculator.inputNumber2));
        break;
    }
}
