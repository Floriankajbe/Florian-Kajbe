function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin"&& password=="entry")
    {
        alert("login succesfully!");
        location.assign("file:///C:/Users/App13b/Desktop/Florian%20Kajbe%20E.U/dokumente.html");
    
    }
    else
    {
        alert("Username or Password is not correct!");
        location.reload();
        
    }
}