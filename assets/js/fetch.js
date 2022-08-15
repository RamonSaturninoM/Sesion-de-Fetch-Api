/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage


FETCH API

Asincronismo (cuando le pido una torta al senor de las tortas con mucha timepo de anticipacion)

JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo. 
    - Single Thread
    - Operaciones de entrada y salida
    - Bloqueo
    - No bloqueo


Ejemplo de aeropuerto

Pista de aterrizaje = hilo o thread
Input = cuando un avion va aterrizar
Output = cuando el avion tiene que despegar
Manejador de eventos = la torre de control

Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.


Sincronismo (cuando le pido una torta al senor de las tortas para ya porque tengo poco tiempo para comer)




*/



//Ejemplo de JavaScript Sincrono
console.log ("Inicio Sincrono"); //1
function dosSincrono (){
    console.log("Dos");
}
function unoSincrono(){ 
    console.log("Uno");//2
    dosSincrono(); //3
    console.log("Tres"); //4
}
unoSincrono();
console.log("Fin de Sincrono");//5

//Cual es la salida de este codigo: 1, 2, 3



//Ejemplo de JS asincrono
console.log ("Inicio de Asincrono");//1
function dos(){ //Se pone en espera 2 segundos
    setTimeout(function(){
        console.log("Dos");//5
    }, 2000);
}
function uno(){
    setTimeout(function(){
        console.log("Uno");
    }, 0); //4
    dos();
    console.log("Tres"); //2
}
uno();
console.log("Fin de Asincrono");//3

//Cual es la salida de este codigo?: 3, 1 y 2


/*
Ejemplos de tareas asincronas

-fetch a una url para obtener un archivo JSON
-Tareas programadas con setTimeout
-Spotify, al momento de reproducir



Mecanismos asincronos en JS

para controlar la asincronia en JS, podemos usar alguno de estos mecanismos

-callbacks
-promises
-async/await

Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir un .mp3



Mecanismos asincronos en JAVASCRIPT

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

    - Callbacks
    - Promises
    - Async/Await
asincrona falla (reject)


Nuestras promesas tiene algunos metodos:

    - then(function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
    - catch(function resolve): Ejecuta la funcion reject cuando la promesa no se cumple.
    
    - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.

//Ejemplo archivos de Felipe

- Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
- Fullfilled: Cuando Felipe los envia
- Rejected: Cuando no los envia o cuando avisa que no los puede enviar.

//Ejemplo de los archivos de Felipe
    - then (funcion archivosEnviados)
    - catch (funcion felipeNoCumple)
    - finally (funcion promesaTerminada)


*/
//Promesa de AMOR donde nos dejan en visto un ratito, y luego nos aceptan la invitacion
var promesaDeAmor = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve ("Si quiero salir contigo, te amo");
    }, 5000);
});
promesaDeAmor.then(function(valor){
    console.log(valor);
});
console.log(promesaDeAmor);


//Ejemplo de promesa para ir por unas tortas
let decision = "No";

const promesaTortas = new Promise((resolve, reject) => {
    if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
    resolve(decision);
}
);
console.log(promesaTortas);


/*

Fetch API

Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar


//const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa



*/


fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')//Realizamos la peticion a la url de la api pokemon
   .then(datos =>{
    return datos.json();
   })
   .then(info=>{
    console.log("El nombre de nuestro pokemon es: ", info.name, " y su numero es: ", info.id);
   });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(respuesta => respuesta.json())
        .then(dato => console.log(dato))
   }
   fetchPokemon(25);
   



//    Solicitud GET
fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
    .then((datos) => {
      //cuando la promesa es resuelta, entonces ejecutamos esta funcion
      return datos.json(); //convertimos la respuesta a un formato JSON
    })
    .then((info) => {
      //cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
      console.log(
        "El nombre de nuestro producto es:",
        info.title,
        " y su precio es: ",
        info.price
      ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
    });



    // Solicitud POST para enviar informacion

    fetch('https://fakestoreapi.com/products',{
        method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
        body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
        
        //cuerpo de la solicitud    
            {
                title: 'Cacahuates',
                price: 3.0,
                description: 'Deliciosos Cacahuates Saladitos',
                image: 'https://i.pravatar.cc',
                category: 'jewelery'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))



/* APIS de almacenamiento WEB

        la API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

   - almacenamiento local
  - almacenamiento de sesiones

    Tanto el almacenamiento local como el de sesiones proporcionan una area privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta informacion


           Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.


    ALMACENAMIENTO LOCAL (LocalStorage)

 La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

 El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

 La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.




 ALMACENAMIENTO DE SESION (SessionStorage)


 La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador (es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.

como accdemos al almacenamiento?

window.localStorage
windows.sessionStorage




*/




// Guardar datos (localStorage.setItem(key,value))

//La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key, value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.


localStorage.setItem("Nombre", "Ramon");

localStorage.setItem("Apellido", "Saturnino");

localStorage.setItem("Edad", 20);

localStorage.setItem("Es programador?", true);


/*
Recuperar datos (local.Storage.getItem(key,value))


*/

let recuperarNombre = localStorage.getItem("Nombre");
console.log(recuperarNombre);

let recuperarEdad = localStorage.getItem("Edad");
console.log(recuperarEdad);


// remover datos de localStorage (localStorage.remove Item(key))

localStorage.removeItem("Nombre");

// conocer el largo de nuestro almacenamiento (localStoragre.length)

let longitudStorage = localStorage.length;
console.log(longitudStorage);

// limpiar datoss del local storagee (localStorage.clear())

localStorage.clear();

// agregar elementos con sessionStorage

sessionStorage.setItem("Perrito", "Rocky");
sessionStorage.setItem("Gatito", "Bigotes");
sessionStorage.setItem("Nutria", "Hernesto");
sessionStorage.setItem("Caracol", "Gary");
sessionStorage.setItem("Conejito", "Griselo");












function guardarDatos(){

    localStorage.nombre = document.getElementById("nombre").value; //guardar el valor en localStorage

    localStorage.password = document.getElementById("password").value; //guardar el valor en localStorage

    document.getElementById("datos").innerHTML = ("Datos guardados correctamente"); //sobreescribimos el contenido del parrafo por este nuevo mensaje

    console.log(typeof localStorage.nombre);
    console.log(typeof localStorage.password);

}





function recuperarDatos(){

    

    if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    }else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password!!!!";
    }

}