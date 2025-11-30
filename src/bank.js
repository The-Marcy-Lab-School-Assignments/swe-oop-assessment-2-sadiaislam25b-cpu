class BankAccount {
  #balance = 0;
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.getBalancebalance}`);
    }
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];
  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += account.getbalance;
    });
    return total;
  }

  findAccount(accountNumber) {
    return accounts.find((account) => account.accountNumber === accountNumber);
  }
}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { BankAccount, Bank };
