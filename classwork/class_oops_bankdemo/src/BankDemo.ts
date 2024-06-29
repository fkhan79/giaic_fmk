import inquirer from 'inquirer';
import chalk from 'chalk';

// Abstract class representing a generic bank account
export abstract class BankAccount {
  // Static property for the bank name, shared by all instances
  private static bankName: string = 'Fictitious Bank';
  
  // Protected properties accessible within the class and subclasses
  protected accountNumber: number;
  protected accountHolder: string;
  protected balance: number;

  // Constructor to initialize the properties
  constructor(accountNumber: number, accountHolder: string, balance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Abstract method that must be implemented by subclasses
  abstract displayAccountInfo(): void;

  // Static method to get the bank name
  static getBankName(): string {
    return BankAccount.bankName;
  }

  // Protected method to get balance, accessible within the class and subclasses
  protected getBalance(): number {
    return this.balance;
  }

  // Public method to deposit money into the account
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount; // Increase the balance by the deposit amount
      console.log(chalk.green(`Deposited: ${amount}. New Balance: ${this.balance}`));
    } else {
      console.error(chalk.red('Deposit amount must be positive')); // Error message for invalid deposit
    }
  }

  // Public method to withdraw money from the account
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount; // Decrease the balance by the withdrawal amount
      console.log(chalk.green(`Withdrawn: ${amount}. New Balance: ${this.balance}`));
    } else {
      console.error(chalk.red('Invalid withdrawal amount')); // Error message for invalid withdrawal
    }
  }
}

// Subclass representing a savings account
export class SavingsAccount extends BankAccount {
  // Private property for the interest rate
  private interestRate: number;

  // Constructor to initialize properties including those inherited from the base class
  constructor(accountNumber: number, accountHolder: string, balance: number, interestRate: number) {
    super(accountNumber, accountHolder, balance); // Call the constructor of the base class
    this.interestRate = interestRate;
  }

  // Implementing the abstract method to display account information
  displayAccountInfo(): void {
    console.log(chalk.blue(`Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.getBalance()}, Interest Rate: ${this.interestRate}, Bank: ${BankAccount.getBankName()}`));
  }
}

// Subclass representing a checking account
export class CheckingAccount extends BankAccount {
  // Private property for the overdraft limit
  private overdraftLimit: number;

  // Constructor to initialize properties including those inherited from the base class
  constructor(accountNumber: number, accountHolder: string, balance: number, overdraftLimit: number) {
    super(accountNumber, accountHolder, balance); // Call the constructor of the base class
    this.overdraftLimit = overdraftLimit;
  }

  // Implementing the abstract method to display account information
  displayAccountInfo(): void {
    console.log(chalk.blue(`Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.getBalance()}, Overdraft Limit: ${this.overdraftLimit}, Bank: ${BankAccount.getBankName()}`));
  }

  // Overriding the withdraw method to account for overdraft
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= (this.balance + this.overdraftLimit)) {
      this.balance -= amount; // Decrease the balance by the withdrawal amount
      console.log(chalk.green(`Withdrawn: ${amount}. New Balance: ${this.balance}`));
    } else {
      console.error(chalk.red('Invalid withdrawal amount or exceeds overdraft limit')); // Error message for invalid withdrawal
    }
  }
}
