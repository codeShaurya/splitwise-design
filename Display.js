
class Display {
    static showUser(users) {
        console.log("\n==========Users=============")
        console.log("UID", "Name", "Email", "Phone")
        for (const [key, value] of Object.entries(users)) {
            console.log(key, "=>", value.ID, value.Name, value.Email, value.Phone)
        }
    }

    static showTransaction(transactions) {
        console.log("\n==========Transactions=============")
        console.log("TD", "Payer ID", "Exp.Type", "Amount", "Payee")
        for (const [key, value] of Object.entries(transactions)) {
            console.log(key, value.PayerId, value.ExpenseType, value.Amount, value.Payee)
        }
    }

    static showUserTransaction(transactions) {
        console.log("\n==========User Transactions=============")
        console.log("UTID", "TID", "Type", "UID", "Amount")
        for (const [key, value] of Object.entries(transactions)) {
            console.log(key, value.TransactionId, value.TransactionType, value.UserId, value.Amount)
        }
    }
}

module.exports.Display = Display