class User {
    fullname:string
    firstname:string
    lastname:string

    constructor(firstname:string,lastname:string) {
        this.firstname = firstname
        this.lastname = lastname
        this.fullname = firstname+' '+lastname
    }
}

interface Person {
    firstname:string
    lastname:string
}

function greater(person:Person) {
    return 'hello'+person.firstname+' '+person.lastname
}

let user = new User('yee','huang')

console.log(greater(user)) 