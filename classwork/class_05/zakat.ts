import inquirer from "inquirer";

let zakat: number = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;

let condition = true;

while(condition) {

    const answer = await inquirer.prompt([
        {
            name: "goldWeight",
            message: "Enter gold weight: ",
            type: "number"
        }
    ]);
    
    let goldWeight = answer.goldWeight;
    
    if (goldWeight >= goldWeightInTolaReq) {
        let calculatedZakat = (goldWeight * goldValueInTola) * (zakat / 100);
        console.log(`The calculated value of gold weighing
         ${goldWeight} tola is ${calculatedZakat}`);
    } else {
        console.log("Zakat not applicable")
        condition = false;
    }    
}


