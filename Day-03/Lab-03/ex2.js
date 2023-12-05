let user = prompt('Enter your username')
let password = prompt('Enter your password')

function auth(x,y){
    if(x !== 'admin' && y!=='421$$'){
        return alert('wrong user name & password')
    } else if(x !== 'admin'){        
        return alert('wrong username')
    } else if(y!=='421$$'){
        return alert('wrong password')
    }
    alert('Welconme Succes Login !')

}

auth(user,password)
