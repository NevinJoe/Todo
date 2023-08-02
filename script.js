function getData(callback){
    event.preventDefault();
    // alert("clicked");
    var user=document.getElementById('user');
    var pass=document.getElementById('pass');
    if(user.value==='admin' && pass.value==='12345'){
        callback();
    }
    else{
        document.getElementById('err').innerText="Enter a valid username and password";
    }
}
function validate(){
    window.location.href ="todo.html";
}