var {
    USER_TRANSACTION, 
    TRANSACTION_TYPE_CREDIT, 
    TRANSACTION_TYPE_DEBIT
} = require('./constant')

class UserTransaction {
    #id
    #user_id
    #transaction_type
    #transaction_id
    #amount

    constructor() {
        this.#id = USER_TRANSACTION ++
    }

    get ID() {
        return this.#id
    }

    get UserId() {
        return this.#user_id
    }

    get TransactionType() {
        return this.#transaction_type
    }
    
    get TransactionId() {
        return this.#transaction_id
    }

    get Amount() {
        return this.#amount
    }

    set UserId(user_id) {
        if(user_id === "" || user_id === undefined) {
            throw "Invalid user id"
        }

        this.#user_id = user_id
    }
    
    set TransactionType(transaction_type) {
        if(transaction_type != TRANSACTION_TYPE_CREDIT && transaction_type != TRANSACTION_TYPE_DEBIT) {
            throw "Invalid transaction type"
        }

        this.#transaction_type = transaction_type
    }


    set TransactionId(transaction_id) {
        if(transaction_id === "" || transaction_id === undefined) {
            throw "Invalid transaction_id"
        }

        this.#transaction_id = transaction_id
    }

    set Amount(amount) {
        if(amount < 0) {
            throw "Invalid amount"
        }

        this.#amount = amount
    }

    static createUserTransaction(tran_id, user_id, tran_type, amount) {
        var ut = new UserTransaction()
        ut.Amount = amount
        ut.UserId = user_id
        ut.TransactionId = tran_id
        ut.TransactionType = tran_type

        return ut
    }
}


module.exports.UserTransaction = UserTransaction