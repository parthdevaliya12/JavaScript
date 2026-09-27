
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    hidePassword() {
        return `xyz${this.password}abc`
    }

} 

const user = new User("Parth", "parth@gmail.com", "123")
console.log(user.hidePassword());
