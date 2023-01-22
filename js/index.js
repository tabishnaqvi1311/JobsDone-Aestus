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

function clicked(){
    const password = document.querySelector("input[name = psw]");
    console.log("hell", password)
} 