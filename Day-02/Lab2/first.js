let interedAge = prompt('Enter Your Age')
// console.log(interedAge)

let age = parseInt(interedAge)
console.log(age)


//Check age validation
if(age <= 0 ) {
    location.reload();
    
}else if(!interedAge) {
    console.log('Quit')
    window.stop()

    
} else {
    switch(true) {
        case age >= 1 && age < 11:
            alert('You are a child')
            break;
        case age >= 11 && age <= 18:
            alert('Your are a Teenager');
            break;
        case age >= 19 && age <= 50:
            alert('Your are a Grown up')
            break;
        case age >50:
            alert('Your are Older than 50')
            break;

    }
    location.reload()
}

    




