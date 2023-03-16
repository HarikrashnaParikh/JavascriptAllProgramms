let password='fghj';
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