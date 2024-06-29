import inquirer from "inquirer";
import chalk from "chalk";
import { BankAccount,CheckingAccount,SavingsAccount } from "./BankDemo.js";

// Function to create and manage bank accounts
async function main() {
    // Asking user for account type
    const accountTypeAnswer = await inquirer.prompt({
      type: 'list',
      name: 'accountType',
      message: 'Select account type:',
      choices: ['Savings Account', 'Checking Account']
    });
  
    // Asking user for account details
    const accountDetails = await inquirer.prompt([
      {
        type: 'input',
        name: 'accountNumber',
        message: 'Enter account number:'
      },
      {
        type: 'input',
        name: 'accountHolder',
        message: 'Enter account holder name:'
      },
      {
        type: 'input',
        name: 'balance',
        message: 'Enter initial balance:',
        validate: (input) => !isNaN(input) && input >= 0 ? true : 'Please enter a valid balance'
      },
      {
        type: 'input',
        name: 'interestRate',
        message: 'Enter interest rate (for Savings Account):',
        when: (answers) => answers.accountType === 'Savings Account',
        validate: (input) => !isNaN(input) && input >= 0 ? true : 'Please enter a valid interest rate'
      },
      {
        type: 'input',
        name: 'overdraftLimit',
        message: 'Enter overdraft limit (for Checking Account):',
        when: (answers) => answers.accountType === 'Checking Account',
        validate: (input) => !isNaN(input) && input >= 0 ? true : 'Please enter a valid overdraft limit'
      }
    ]);
  
    let account: BankAccount;
  
    // Creating the appropriate account type
    if (accountTypeAnswer.accountType === 'Savings Account') {
      account = new SavingsAccount(
        parseInt(accountDetails.accountNumber),
        accountDetails.accountHolder,
        parseFloat(accountDetails.balance),
        parseFloat(accountDetails.interestRate)
      );
    } else {
      account = new CheckingAccount(
        parseInt(accountDetails.accountNumber),
        accountDetails.accountHolder,
        parseFloat(accountDetails.balance),
        parseFloat(accountDetails.overdraftLimit)
      );
    }
  
    // Display account info
    account.displayAccountInfo();
  
    // Interact with the account
    let exit = false;
    while (!exit) {
      const action = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: ['Deposit', 'Withdraw', 'Exit']
      });
  
      if (action.action === 'Deposit') {
        const depositAnswer = await inquirer.prompt({
          type: 'input',
          name: 'amount',
          message: 'Enter deposit amount:',
          validate: (input) => !isNaN(input) && input > 0 ? true : 'Please enter a valid amount'
        });
        account.deposit(parseFloat(depositAnswer.amount));
      } else if (action.action === 'Withdraw') {
        const withdrawAnswer = await inquirer.prompt({
          type: 'input',
          name: 'amount',
          message: 'Enter withdrawal amount:',
          validate: (input) => !isNaN(input) && input > 0 ? true : 'Please enter a valid amount'
        });
        account.withdraw(parseFloat(withdrawAnswer.amount));
      } else {
        exit = true;
      }
  
      // Display updated account info
      account.displayAccountInfo();
    }
  }
  
  // Run the main function
  main().catch(err => console.error(chalk.red(err)));
  