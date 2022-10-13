let acccion = "";
let verificacion = true;
let numero = 0 ;
let i = 4 ;

const listaContactos = {
    Contacto1 : "Luis antonio",
    Contacto2 : "Robert guerra",
    Contacto3 : "Jose Najera"
}

do {
    if(!verificacion){
        alert('digita una opcion valida')
    }
    acccion = prompt("Accion,\ningrese el numero 1 para guardar,\ningrese el numero 2 para eliminar,\ningrese el numero 3 para Modificar", "");
    if (isNaN(acccion)) {
        verificacion = false;
    }else{
        verificacion = true ;
        numero = parseInt(acccion);
        if (numero > 3 || numero < 1) {
            verificacion = false;
        }

    }
} while (!verificacion);

let contacto = "";


switch (numero) {
    case 1:
        contacto = prompt("ingrese el contacto que desea agregar");
        guardar(contacto);    
        break;
    case 2:
        contacto = prompt("ingrese el contacto que desea eliminar");
        eliminar(contacto);    
        break;
    default:
        break;
}


function guardar (contactoGuardar) {
       listaContactos["Contacto"+i] = contactoGuardar;
       console.log(listaContactos);
}

function eliminar(contactoEliminar) {
    delete listaContactos[contactoEliminar];
      console.log(listaContactos);
}

alert(acccion)