let first = parseInt( prompt('Enter the first number ?'))
let second =parseInt( prompt('Enter the second number ?'))
let third = parseInt(prompt('Enter the third number ?'))



// let arr = [first,second,third]
// console.log(arr)


// Answer ONE

// let max = 0;
// if(first > second && first > third){
//     max = first
// } else if(second > first && second > third){
//     max  = second
// }else{
//     max =third
// }
/////////////////////////////////////////////
// alert(`The Biggest Number is  ${max}`)


// you can use array.sort and pick the first one
let arr = [first,second,third]
let sortedArr = arr.sort((a,b)=>{ return b-a})
console.log(sortedArr)
alert(`The Biggest Number is  ${sortedArr[0]}`)



//you can use bubble sort algoritm in case of long array
