// Driver file

var SplitWise = require('./SplitWise').SplitWise
var Display = require('./Display').Display

var { 
    EXPENSE_TYPE_EQUAL,
    EXPENSE_TYPE_EXACT
} = require('./constant')

var app = new SplitWise()

var res = app.addUser("temp1", "temp1@gmail.com", 1234567890)
console.log(res)


var res = app.addUser("tmp2", "tmp2@gmail.com", 2345678901)
console.log(res)


var res = app.addUser("temp3", "temp3@gmail.com", 3456789012)
console.log(res)

var res = app.addUser("temp3", "temp3@gmail.com", 4567890123)
console.log(res)

var res = app.addTransaction(1234567890, EXPENSE_TYPE_EQUAL, 100, [
    2345678901, 3456789012, 4567890123
])
console.log(res)


var res = app.addTransaction(4567890123, EXPENSE_TYPE_EQUAL, 1000, [
    2345678901, 1234567890, 3456789012
])
console.log(res)

var res = app.addTransaction(3456789012, EXPENSE_TYPE_EXACT, 100, [1234567890])
console.log(res)

Display.showUser(app.Users)
Display.showTransaction(app.Transactions)
Display.showUserTransaction(app.UserTransactions)