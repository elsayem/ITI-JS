let btn = document.querySelector('#loginBtn')

btn.onclick = checkVal   
let message = document.querySelector('#mssg')




function checkVal(){
    let user = document.querySelector('#username').value
    let pass = document.querySelector('#password').value 
    let profile ={
    user,
    pass
}
    if( profile.user === 'admin' && profile.pass =='123'){
        message.textContent = 'Welcome back !'
    } else{
        message.textContent = 'Not registered'
    }
    

}