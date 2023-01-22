document.getElementById('signup').onclick = 
function(){
    location.href='signup.html'
}

document.getElementById('bton').onclick =
function(){
    location.href = '#footer'
}

document.getElementById('loginbutton').onclick =
function(){
    location.href = 'login.html'
}

function passCheck(){
    let pass = document.querySelector('input[name = psw]').value;
    let repass = document.querySelector('input[name = reppsw]').value;
    if ((pass != repass) || (pass.length < 8)) {
        console.log('passwords do not match or is less than 8 characters')
        alert('passwords do not match and less')        
    }
}