var {
    EXPENSE_TYPE_EXACT, 
    EXPENSE_TYPE_EQUAL
} = require('./constant')

class Utils {

    static failed(err) {
        return {
            code: "failed",
            err
        }
    }

    static success(data) {
        return {
            code: "succes",
            data: data
        }
    }

    static getShare(payee, amount, expense_type)  {
        if(expense_type === EXPENSE_TYPE_EXACT) {
            return amount
        }

        if(expense_type === EXPENSE_TYPE_EQUAL) {
            return (amount/payee.length).toFixed(2)
        }
    }
}

module.exports.Utils = Utils