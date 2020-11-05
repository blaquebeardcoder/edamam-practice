class BankAccount {
    constructor(type, money, backupAccount = null) {
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
        this.backupAccount = backupAccount
    }

    withdraw(amount) {
        const previousBalance = this.money
        this.money = this.money - amount

        this.transactionHistory.push({
            previousBalance: previousBalance, 
            transactionType: 'withdrawal',
            transactionAmount: amount, 
            endingBalance: this.money
        })

        if (this.money < 0) {
            //change to positive amount
        const overdrawnAmount = this.money * -1
        //withdraw from savings (backup) account
        this.backupAccount.withdraw(overdrawnAmount)

        //deposit from savings to checking (this account)
        this.deposit(overdrawnAmount)
        
        console.log('Non Sufficient Funds!!!')
        }
    }

        deposit(income) {
            const previousBalance = this.money
            this.money = this.money + income

            this.transactionHistory.push ({
                previousBalance: previousBalance,
                transactionType: 'deposit',
                transactionAmount: income,
                endingBalance: this.money
            })

        }


        showBalance() {
            return this.money
        }

    }

const savingsAccount = new BankAccount('savings', 1000)
const checkingAccount = new BankAccount('checking', 0, savingsAccount)
console.log(savingsAccount);
console.log(checkingAccount);

checkingAccount.withdraw(100)
console.log(checkingAccount)
console.log(savingsAccount)