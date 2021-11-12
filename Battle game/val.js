function validateform()
    {
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    var firstpassword=document.myform.password.value;
    var secondpassword=document.myform.cpassword.value;

    if(password.length<6)
    {  
      alert("Password must contain atleast 6 characters/numbers.");  
      return false;  
    }
      if(firstpassword==secondpassword)
      {
        return true;
        }
        else
        {
        alert("password must be same!");
        return false;
        }
    } 
