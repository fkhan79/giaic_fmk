import inquirer from "inquirer";
import chalk from "chalk";

let tableGenerator = await inquirer.prompt([
    {
        name: "inputNumber",
        type: "number",
        message: chalk.bgBlue.bold.white("Enter The Number for Table:")
    },
    {
        name: "inputUpto",
        type: "number",
        message: chalk.bgBlue.bold.white("Enter The Number till you want to generate:")
    }
]);

for (let i = 1; i <= tableGenerator.inputUpto; i++) {
    if (i % 2 == 0) {
        console.log(chalk.bgRed.bold.white(`${tableGenerator.inputNumber} x ${i} = ${tableGenerator.inputNumber * i}`));
    } else {
        console.log(chalk.bgGreen.bold.white(`${tableGenerator.inputNumber} x ${i} = ${tableGenerator.inputNumber * i}`));
    }
}