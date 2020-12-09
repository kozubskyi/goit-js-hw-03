// 'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = { id: this.transactions.length + 1, type, amount };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, 'deposit');

    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Снятие такой суммы невозможно, недостаточно средств`);
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, 'withdraw');

    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

    for (const transaction of this.transactions) {

      if (id === transaction.id) {
        console.log(`Детали транзакции с id ${id}:`);
        return transaction;
      }
    }
    return `Транзакции с id ${id} не существует`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const typeArray = [];
    let transactionQuantity = 0;
    let transactionTotal = 0;

    if (type !== 'deposit' && type !== 'withdraw') {
      return `Типа транзакции ${type} не существует`;
    }

    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        typeArray.push(transaction);
        transactionTotal += transaction.amount;
      }
    }
    transactionQuantity = typeArray.length;
    return `Всего ${transactionQuantity} транзакций типа ${type} на сумму ${transactionTotal}`;
  },
};

console.log(account.getBalance()); // Текущий баланс: 0

account.deposit(1000);

account.deposit(2000);

account.withdraw(500);

console.log(account.getBalance()); // Текущий баланс: 2500

account.withdraw(5000); // Снятие такой суммы невозможно, недостаточно средств

console.log(account.getBalance()); // Текущий баланс: 2500

console.log(account.getTransactionDetails(1)); // Детали транзакции с id 1: {id: 1, type: "deposit", amount: 1000}
console.log(account.getTransactionDetails(2)); // Детали транзакции с id 2: {id: 2, type: "deposit", amount: 2000}
console.log(account.getTransactionDetails(3)); // Детали транзакции с id 3: {id: 3, type: "withdraw", amount: 500}
console.log(account.getTransactionDetails(4)); // Транзакции с id 4 не существует

console.log(account.getTransactionTotal('deposit')); // Всего 2 транзакций типа deposit на сумму 3000
console.log(account.getTransactionTotal('withdraw')); // Всего 1 транзакций типа withdraw на сумму 500
console.log(account.getTransactionTotal('playing')); // Типа транзакции playing не существует