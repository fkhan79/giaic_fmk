Detailed Explanation:
Dependencies:
Import inquirer for user input.
Import chalk for colored console output.

-----------------------------------
BankAccount Class (Abstract Class):
-----------------------------------
Static Property:
bankName: A static property shared across all instances of BankAccount.
Protected Properties:
accountNumber, accountHolder, balance: Properties that can be accessed within the class and its subclasses.
Constructor:
Initializes accountNumber, accountHolder, and balance.
Abstract Method:
displayAccountInfo: An abstract method that must be implemented by all subclasses.
Static Method:
getBankName: Returns the static bankName.
Protected Method:
getBalance: Returns the balance, accessible within the class and its subclasses.
Public Methods:
deposit: Allows depositing money into the account with validation and displays the new balance.
withdraw: Allows withdrawing money from the account with validation and displays the new balance.

-----------------------------------------------
SavingsAccount Class (Subclass of BankAccount):
-----------------------------------------------
Private Property:
interestRate: Represents the interest rate for the savings account.
Constructor:
Initializes properties including those inherited from BankAccount.
Method Implementation:
displayAccountInfo: Implements the abstract method from BankAccount and displays account info using chalk for coloring.

------------------------------------------------
CheckingAccount Class (Subclass of BankAccount):
------------------------------------------------
Private Property:
overdraftLimit: Represents the overdraft limit for the checking account.
Constructor:
Initializes properties including those inherited from BankAccount.
Method Implementation:
displayAccountInfo: Implements the abstract method from BankAccount and displays account info using chalk for coloring.
Overridden Method:
withdraw: Overrides the withdraw method to account for the overdraft limit and displays the new balance using chalk for coloring.

--------------------------
Interactive Functionality:
--------------------------
Main Function:
Uses inquirer to prompt the user for account type and details.
Creates an instance of either SavingsAccount or CheckingAccount based on user input.
Displays the account info.
Provides an interactive menu for the user to deposit, withdraw, or exit.
Continuously updates and displays the account info based on user actions.