let userNum = Number(prompt('Enter a number between 0 ~ 9'))

function generateRan(){
    let randomNum = Math.floor(Math.random()* 10)
    return randomNum
}
let ran = generateRan()
console.log(ran)
function compareNum(x,y){
    if(x === y){
        alert('Congratulations, you guessed the right number')
    }else{
        alert('unfortunately,please try again')
    }
}
compareNum(ran,userNum)