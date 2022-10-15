let acccion = "";
let verificacion = true;
let numero = 0 ;
let i = 5 ;
//let contactosAmostrar = "";
let items = 0;
let fin = "";


const listaContactos = {
    Contacto1 : {nombre: "Luis antonio",
                 apellidos: "florez gil",
                 telefono: 2323782325,
                 ubicacion:{ciudad: "barranquilla",
                            direccion:"kr 6 Dg76 F17 C1" }},
    Contacto2: {nombre: "franco ",
                apellidos: "perez",
                telefono: 746327453,
                ubicacion:{ciudad: "Ballunca",
                           direccion:"cuarta colina" }}
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
            if (numero > 3 || numero < 1 || acccion == "") {
                verificacion = false;
            }
            
        }
    } while (!verificacion);

    let contacto = "";
    let newcontacto = "";
    
    switch (numero) {
        case 1:
            nombreContacto = prompt("ingrese el nombre del contacto que desea Agregar");
            apellidoContacto = prompt("ingrese el apellido del contacto que desea Agregar");
            teléfonoContacto = prompt("ingrese el teléfono del contacto que desea Agregar");
            ciudadContacto = prompt("ingrese la ciudad del contacto que desea Agregar");
            direccionContacto = prompt("ingrese las ubicaciones del contacto que desea Agregar");
            
            guardar(nombreContacto, apellidoContacto, teléfonoContacto, ciudadContacto, direccionContacto);    
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
            

function guardar (nombreContacto, apellidoContacto, teléfonoContacto, ciudadContacto, direccionContacto) {
    listaContactos["Contacto"+i] = {nombre: nombreContacto, apellidos:apellidoContacto, telefono:teléfonoContacto, ubicacion:{ciudad:ciudadContacto, direccion: direccionContacto} };
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
 /* contactosAmostrar = "";
    items = Object.values(listaContactos);

    for (let i = 1; i < items.length + 1; i++) {
        if(listaContactos["Contacto"+i] != undefined ){
            contactosAmostrar += listaContactos["Contacto"+i]+" \n";
        }
                           
    } 
    alert(contactosAmostrar); */
    console.log(listaContactos)
}