
    function matchpass() {
        var firstpassword = document.form1.password.value;
        var secondpassword = document.form1.password2.value;
 
        if (firstpassword == secondpassword) {
            return true;
        } else {
            alert("password must be same!");
            return false;
        }
    }