function welcomeMessege(name, greatHandeler) {
    console.log(name, greatHandeler)
    greatHandeler(name)
}
//const names = ['Tom', 'Jerry']
//const myObj = { names: 'Tom', age: 100 }
function greetMorning(name) {
    console.log('good morning', name)
}
function greetEvening(name) {
    console.log('good morning', name)
}

welcomeMessege('Hey Tom', greetMorning)
welcomeMessege('Hey Jerry', greetEvening)