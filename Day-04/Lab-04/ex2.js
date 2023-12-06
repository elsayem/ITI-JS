
let btn = document.querySelector("#btn")
btn.onclick = creatArr;

function creatArr(){
    let first = document.querySelector('#num1').value
    let second = document.querySelector('#num2').value
    console.log(first)

    let spArr = first.split(`,`).map(Number)
    let spArr2 = second.split(`,`).map(Number)
    let finalArr = [...spArr,...spArr2]
    console.log(spArr)
    console.log(spArr2)
    console.log(finalArr)
    //using filter to remove the duplicate numbers
    let fArr = finalArr.filter(function(el,i){
        return finalArr.indexOf(el) === i
    })
    console.log(fArr)

}


