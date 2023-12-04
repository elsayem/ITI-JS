let string = prompt('Enter your String')

const vowels = ['a','e','o','u','i']

let counter = 0;

//Sytimatic Way
// for(let i = 0; i < string.length; i++){
//     if(string[i] == vowels[0]){
//         counter++
//     } 
//     if(string[i] == vowels[1]){
//         counter++
//     } 
//     if(string[i] == vowels[2]){
//         counter++
//     } 
//     if(string[i] == vowels[3]){
//         counter++
//     } 
//     if(string[i] == vowels[4]){
//         counter++
//     } 
    
// }
// alert(`The Number of Vowels in ${string} is ${counter}`)


// Using include mehtod
for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i])){
        counter++;
    }
}
alert(`The Number of Vowels in ${string} is ${counter}`)


