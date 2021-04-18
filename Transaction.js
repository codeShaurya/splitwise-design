var { 
    TRANSACTION, 
    EXPENSE_TYPE_EQUAL,
    EXPENSE_TYPE_PERCENT,
    EXPENSE_TYPE_EXACT
} = require('./constant')

class Transaction {
    #id
    #payer_id
    #expense_type
    #amount
    #payee

    constructor() {
        this.#id = TRANSACTION++
    }

    get ID() {
        return this.#id
    }

    get PayerId() {
        return this.#payer_id
    }

    get ExpenseType() {
        return this.#expense_type
    }

    get Amount() {
        return this.#amount
    }

    get Payee() {
        return this.#payee
    }

    set PayerId(payer_id) {
        if(payer_id === "" || payer_id === undefined) {
            throw "invalid user id"
        }

        this.#payer_id = payer_id
    }

    set ExpenseType(expense_type) {
        if(expense_type != EXPENSE_TYPE_EQUAL && 
            expense_type != EXPENSE_TYPE_EXACT &&
            expense_type != EXPENSE_TYPE_PERCENT) {
                throw "Invalid expense type"
        }

        this.#expense_type = expense_type
    }

    set Amount(amount) {
        if(amount < 0) {
            throw "Invalid amount"
        }

        this.#amount = amount
    }

    set Payee(payee) {
        if(!Array.isArray(payee)) {
            throw "Payee must be an array"
        }

        this.#payee = payee
    }


    static createTransaction(payer_id, expense_type, amount, payee) {
        var t = new Transaction()
        t.PayerId = payer_id
        t.ExpenseType = expense_type
        t.Amount = amount
        t.Payee = payee

        return t
    }
}


module.exports.Transaction = Transaction