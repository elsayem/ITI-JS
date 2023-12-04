let  hour24 = parseInt(prompt('Enter the clock in 24hr format'))

// if(hour4){

// }
let hour12 = 0

if(hour24 > 24 || hour24 < 0 || !hour24 ){
    alert('Please Enter a valid Time')
    location.reload()

} else{
    switch(true) {
        case hour24 === 0:
            hour12 = 12 + ' AM'
            break;
        case hour24 >= 1 && hour24 < 12:
            hour12 = hour24 + ' AM'
            break;
        case hour24 == 12:
            hour12 = hour24 + ' PM'
            
            break;
        case hour24 > 12 && hour24 < 24:
            hour12 = (hour24 - 12) + ' PM' 
            break;
        // default:
        //     alert('Please Enter a Valid Clock Number')
            
    
    
    }
    
    alert(hour12)
}

