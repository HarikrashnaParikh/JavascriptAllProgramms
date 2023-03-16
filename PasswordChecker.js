let loggedInUser = "Hari";
if(loggedInUser){
    console.log("you are logged in");
}
else{
    console.log("Please log in ");
}

let password='Hari1234';
if(password.length >=6)
{
    if(password.indexOf(' ') === -1)
    {
        console.log('Valid password');
    }
    else
    {
        console.log('pasword is long enough , but can not contain spaces');
    }   
}
else
{
    console.log('password must be longer');
}