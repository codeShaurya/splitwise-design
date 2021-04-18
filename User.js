
var USER_ID = 0

class User {
    #id
    #name
    #email
    #phone

    constructor(){
        this.#id = USER_ID++
    }

    get Name() {
        return this.#name
    }

    get Email() {
        return this.#email
    }

    get Phone() {
        return this.#phone
    }

    get ID() {
        return this.#id
    }

    set Name(name) {
        if(name === "" || name === undefined) {
            throw "name can't be empty"
        }

        this.#name = name
    }

    set Email(email) {
        if(email === "" || email === undefined) {
            throw "name can't be empty"
        }

        this.#email = email
    }

    set Phone(phone) {
        if(phone === "" || phone === undefined) {
            throw "name can't be empty"
        }

        this.#phone = phone
    }

    static createUser(name, email, phone) {
        var user = new User()
        user.Name = name
        user.Email = email
        user.Phone = phone

        return user
    }
}



module.exports.User = User