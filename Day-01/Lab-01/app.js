 let firstName = prompt('Enter your First Name')
 let secondName = prompt('Enter your Second Name')
 let checkName = confirm(`Your Full-Name is ${firstName} ${secondName}`)

 if(!checkName){
    location.reload()
 } else{
    console.log('Thank for Submitting your name')
 }

let birthYear = parseInt( prompt('Enter your Birth Year !'))
console.log(typeof birthYear)
let age  = 2023 - birthYear 
document.write(`<h1>Welcome ${firstName} ${secondName} you are ${age} year old</h1>`);

alert(`Welcome ${firstName} ${secondName} you are ${age} year old`)

