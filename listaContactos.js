/*let acccion = "";*/
let verificacion = true;
let numero = 0 ;
let i = 5 ;
//let contactosAmostrar = "";
let items = 0;
let fin = "";


const listaContactos = {
    Contacto1 : "Luis antonio",
    Contacto2 : "Robert guerra",
    Contacto3 : "Jose Najera",
    Contacto4 : "Luis Hernandez Goenaga"
}

mostarlista();

do {
    
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
            if (numero > 3 || numero < 1 ||numero.value == undefined) {
                verificacion = false;
            }
            
        }
    } while (!verificacion);

    let contacto = "";
    let newcontacto = "";
    
    switch (numero) {
        case 1:
            contacto = prompt("ingrese el contacto que desea Agregar");
            guardar(contacto);    
            break;
        case 2:
            contacto = prompt("ingrese el contacto que desea Eliminar");
            eliminar(contacto);    
            break;
        case 3:
            contacto = prompt("ingrese el contacto que desea Modificar");
            newcontacto = prompt("ingrese modificacion");
            modificar(contacto, newcontacto);    
            break;
    }
                
    fin = prompt("desea terminar,\n digite si/no,", "");

} while (fin != 'si' );
            

function guardar (contactoGuardar) {
    listaContactos["Contacto"+i] = contactoGuardar;
    i++;
    mostarlista();
}
            
function eliminar(contactoEliminar) {
    delete listaContactos[contactoEliminar];
    mostarlista();
}
            
function modificar(contactoModificar, newcontac) {
    listaContactos[contactoModificar] = newcontac;
    mostarlista();
}
            
function mostarlista() {
/*  contactosAmostrar = "";
    items = Object.values(listaContactos);

    for (let i = 1; i < items.length + 1; i++) {
        if(listaContactos["Contacto"+i] != undefined ){
            contactosAmostrar += listaContactos["Contacto"+i]+" \n";
        }
                           
    } 
    alert(contactosAmostrar); */
    console.log(listaContactos)
}
            