function writeToLocalStorage()
{
    var name = document.getElementById("user_name");
    var email=document.getElementById("email");
    console.log(name,email)
    localStorage.setItem("Name",name.value);
    localStorage.setItem("Email",email.value);
}
    




