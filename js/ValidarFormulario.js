function Validar()
{
    var valor = true;

    if (Valida_Text("Nombre") === false) {return false; } 
    if (Valida_Text("Cargo") === false) {return false; } 
    if (Valida_Text("Empresa") === false) { return false; } 
    if (Valida_Correo("Correo") === false) { return false; }     
    if (Valida_Text("Telefono") === false) { return false; } 
    if (Valida_Text("Problematica") === false) { return false; }     

    if (Valida_TextDiferente("Nombre", "Cargo") === false) { return false; }
    if (Valida_TextDiferente("Nombre", "Empresa") === false) { return false; }    
    if (Valida_TextDiferente("Cargo", "Empresa") === false) { return false; }         
    if (Valida_TextDiferente("Nombre", "Problematica") === false) { return false; }         
}

function Valida_Correo(ElementoId) {

    //var Expresion = /\w+@\w+\.+[a-z]/;
    var Expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!Expresion.test(document.getElementById(ElementoId).value)) {
        alert("Favor Ingrese un correo Valido");
        document.getElementById(ElementoId).focus();
        return false;
    }
    else {
        return true;
    }
}  



function Valida_Text(ElementoId)  
{
    if (document.getElementById(ElementoId).value.length < 4) {
        alert("Favor Ingrese " + ElementoId + " Valido");
        document.getElementById(ElementoId).focus();
        return false;
    }
    else{
        return true;
    }

}


function Valida_TextDiferente(ElementoId01, ElementoId02)  
{
    if ((document.getElementById(ElementoId01).value) == (document.getElementById(ElementoId02).value )) {
        alert("Favor Ingrese " + ElementoId02 + " Valido");
        document.getElementById(ElementoId02).focus();
        return false;
    }
    else{
        return true;
    }

}
