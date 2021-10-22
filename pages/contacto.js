function validationInput(){
    const name = document.getElementById("playerName").value;  
    const email = document.getElementById("email").value; 
    const message = document.getElementById("message").value;
    const ingame = document.getElementById("ingame").value;
    let errorMessage;  
    
    if(name.length < 3){
        errorMessage = "Please, introduce a valid name";
        alert(errorMessage);
        return false;
    }

    if((email.length < 1) || (email.indexOf("@") == -1)){
        errorMessage = "Please, introduce a valid Email";
        alert(errorMessage);
        return false;
    }

    if((message.length < 10) || (message.length > 200)){
        errorMessage = "Please, introduce a valis message. It can not superate 300 characters";
        alert(errorMessage);
        return false;
    }

    /*if((ingame == true){
        alert("Your message have been successfully sent!! We will contact you soon within the game");
        return true;
    }*/

    alert("Your message have been successfully sent");
    return True;
}

