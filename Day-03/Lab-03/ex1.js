//User inputs

let firstNum = Number(prompt('Enter the first number'))
let operation  = prompt('Enter The Operation: sum ,multi ,subtract ,division')


const operationArr = ['sum' ,'multi' ,'subtract' ,'division']
while(!operationArr.includes(operation)){
    alert('Please Enter one of the four given operations')
    operation  = prompt('Enter The Operation: sum ,multi ,subtract ,division')
    
    
}
let secondNum =Number(prompt('Enter the second number'))

function mkOperations(){
    let res = 0
if(operation === 'sum'){
    res = firstNum + secondNum;
} else if( operation === 'multi'){
    res = firstNum * secondNum;
}else if( operation === 'subtract'){
    res = firstNum - secondNum
} else if( operation === 'division'){
    res = firstNum/secondNum
}

if(res !== 0){
    alert(` The Result is : ${res}`)

}
}

mkOperations(operation)


