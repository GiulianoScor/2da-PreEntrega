class Personajes {
    constructor (nombre, ataque, vida,) {
        this.name = nombre;
        this.damage = ataque;
        this.life = vida;
        this.id = 0;
        this.mostrar = null
    }

    getNombres() {
        return this.name;
    }

    setId() {
        this.id = id++;
        
    }

    getId() {
        return this.id;
    }

    getAtaque() {
        return this.damage;
    }

    restarVida (x) {
        this.life = this.life - x;
    }

    getVidaActual () {
        return this.life;
    }

    perdedor() {
        if (this.life <= 0) {
            return true;
        }
    }

}

let id = 1;
let objXid;
let personaje_actual;
let naruto = new Personajes ('Naruto', 'Rasengan', 100);
let pain = new Personajes ('Pain', 'Devastacion', 100);
let sasuke = new Personajes ('Sasuke', 'Amaterasu', 100);
let kakashi = new Personajes ('Kakashi', 'Chidori', 100);
let danio;
let pj_secundario;

const coleccion = new Array();
agregar_array(naruto,pain,sasuke,kakashi);



 // Promp para que elija personaje, se podria automatizar pero por el momento queda asi
let pj_principal = parseInt(prompt("Que personaje desea usar?: \n 1- Naruto \n 2- Pain \n 3- Sasuke \n 4- Kakashi"));
personaje_actual = pj_principal

// De acuerdo al array original, filtramos el elegido por el cliente para que no este en el proximo prompt y al array resultante lo modificamos para poder plasmarlo en un prompt.
let filtrar = coleccion.filter ((x) => x.getId() != personaje_actual)
let arrayMostrar = filtrar.map((x) => `${x.getId()}- ${x.getNombres()}`);
console.log (arrayMostrar);


// Se chequea si el numero ingresado corresponde a un ID existente.
if (array_cheq(pj_principal,detectarId(coleccion)) && !isNaN(pj_principal) && pj_principal != null) {

    // Se pregunta contra que personaje quiere luchar, mostrando el array mapeado con el personaje principal "eliminado" para que no se repita
    pj_secundario = parseInt(prompt("Contra que personaje desea luchar?: \n" + arrayMostrar.join("\n")));
    personaje_actual = pj_secundario

    // Guardo en un nuevo objeto, el objeto que corresponde al primer numero (verificado por id) ingresado. Buena practica?
    const objetoPrincipal = new Personajes ();
    Object.assign (objetoPrincipal, objXid)
    console.log (objetoPrincipal)
    

    // Se chequea si el numero ingresado corresponde a un ID existente
    if (array_cheq(pj_secundario, detectarId(filtrar)) && !isNaN(pj_secundario) && pj_secundario != null) {
        

        // Guardo en un nuevo objeto, el objeto que corresponde al segundo numero (verificado por id) ingresado. Buena practica?
        const objetoSecundario = new Personajes ();
        Object.assign (objetoSecundario, objXid)
        console.log (objetoSecundario)

        // Logica de combate, mientras que alguno de los dos tenga mas o igual vida que 0, se realiza.
        while (objetoPrincipal.getVidaActual() >=0 && objetoSecundario.getVidaActual() >=0 ){

            console.log(`${objetoPrincipal.getNombres()} realiza ${danioAtaque(30)} de daño, utilizando ${objetoPrincipal.getAtaque()}.`);
            objetoSecundario.restarVida(danio);
            if (objetoSecundario.getVidaActual() <= 0) {
                console.log (` \n ¡El ultimo ${objetoPrincipal.getAtaque()} ha sentenciado el combate terminando con la vida de su oponente!`)
                break;
            }
            console.log ( ` La vida restante de ${objetoSecundario.getNombres()} es de ${objetoSecundario.getVidaActual()}`)
            console.log ("-------------------------      #      -------------------------")
            console.log(`${objetoSecundario.getNombres()} realiza ${danioAtaque(30)} de daño, utilizando ${objetoSecundario.getAtaque()}.`);
            objetoPrincipal.restarVida(danio);
            if (objetoPrincipal.getVidaActual() <= 0) {
                console.log (` \n ¡El ultimo ${objetoSecundario.getAtaque()} ha sentenciado el combate terminando con la vida de su oponente!`)
                break;
            }
            console.log ( ` La vida restante de ${objetoPrincipal.getNombres()} es de ${objetoPrincipal.getVidaActual()}`)
            console.log ("-------------------------      #      -------------------------")
        }

        if (objetoPrincipal.perdedor()) {
            console.log (`La batalla ha terminado, ${objetoPrincipal.getNombres()} se ha debilitado por lo tanto el ganador es ${(objetoSecundario.getNombres()).toUpperCase()}!!!`)
        } else if (objetoSecundario.perdedor()){
            console.log (`La batalla ha terminado, ${objetoSecundario.getNombres()} se ha debilitado por lo tanto el ganador es ${(objetoPrincipal.getNombres()).toUpperCase()}!!!`)
        }
        
    
    }
}

//funcion automatica para guardar los objetos en un array

function agregar_array (...x) {
    coleccion.push(...x);
    for (const x of coleccion) {
        x.setId()
    }
};

//funcion para chequear los objetos

function array_cheq(x,y) {
    return (x == y.getId())
}

// funcion para detectar el id ingresado de forma automatica de acuerdo el array actual
function detectarId(x) {
    objXid = x.find((x) => x.getId() === personaje_actual);
    return objXid;
}

//funcion para la simulacion de pelea
function danioAtaque (max) {
    danio = Math.floor(Math.random() * (max + 1));
    return danio;
}

