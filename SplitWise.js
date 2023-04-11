var Transaction = require('./Transaction').Transaction
var UserTransaction = require('./UserTransaction').UserTransaction
var User = require('./User').User
var Utils = require('./Utils').Utils

var {
    TRANSACTION_TYPE_CREDIT, 
    TRANSACTION_TYPE_DEBIT, 
} = require('./constant')

class SplitWise {
    #users
    #transactions
    #user_transactions

    constructor() {
        this.#users = {}
        this.#transactions = {}
        this.#user_transactions = {}
    }

    get Users() {
        return this.#users
    }

    get Transactions() {
        return this.#transactions
    }

    get UserTransactions() {
        return this.#user_transactions
    }

    set Users(users) {
        this.#users = users
    }

    set Transactions(transactions) {
        this.#transactions = transactions
    }

    set UserTransactions(user_transactions) {
        this.#user_transactions = user_transactions
    }

    addUser(name, email, phone) {
        try {
            var user = User.createUser(name, email, phone)

            this.Users = {
                ...this.Users,
                [user.Phone] : user
            }

            return Utils.success(user)
        } catch(err) {
            return Utils.failed(err)    
        }
    }

    addTransaction(payerPhone, expense_type, amount, payee) {
        try {
            var payer = this.findUser(payerPhone)
            var tran = Transaction.createTransaction(payer.ID, expense_type, amount, payee)
            
            this.Transactions = {
                ...this.Transactions,
                [tran.ID]: tran
            }

            var ut = UserTransaction.createUserTransaction(tran.ID, payer.ID, TRANSACTION_TYPE_DEBIT, amount)
            this.UserTransactions = {
                ...this.UserTransactions,
                [ut.ID] : ut
            }

            for(let i=0; i<payee.length; i++) {
                let phone = payee[i]
                let user = this.findUser(phone)
                let share = Utils.getShare(payee, amount, expense_type)
                let t = UserTransaction.createUserTransaction(tran.ID, user.ID, TRANSACTION_TYPE_CREDIT, share)

                this.UserTransactions = {
                    ...this.UserTransactions,
                    [t.ID] : t
                }
            }

            return Utils.success(tran)
        } catch(err) {
            return Utils.failed(err)
        }
    }

    findUser(phone) {
        if(this.Users[phone] === undefined) {
            throw "User not found"
        }

        return this.Users[phone]
    }
}


module.exports.SplitWise = SplitWise


