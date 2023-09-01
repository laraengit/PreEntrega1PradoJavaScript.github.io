//Funciones

function menu (nombre, seccion,opciones, cantOpciones){
    //No usar 0 (no toma el caso en el switch), siempre ingresar las opciones de 1 hasta n = cantOciones 
    let elecc
    do {
        elecc= Number(prompt(`${seccion}\n${nombre}, presioná en tu teclado el número correspondiente a lo que querés hacer: \n${opciones} `))
        console.log(`El usuario ingresó ${elecc}`)
    }while(elecc>cantOpciones || elecc<=0 ||  !Number(elecc))
    return elecc
}

function menuPrincipal (nombre){
    let eleccPrinc
    let elecc2 = 1
    
    do{
        eleccPrinc = menu(nombre,"Menú principal", "1. Pedir un turno \n2.Calcular mi Índice de masa corporal (IMC) \n3.Chequear mis valores de presión \n4. Salir",4)
        switch(eleccPrinc){
            case 1:
                console.log(" caso 1. Pedir un turno")
                pedirTurno(nombre)
                elecc2 = menu(nombre,"Qué hacemos?","1.Volver al Menú principal \n2. Salir",2)
                break
            case 2:
                console.log("caso 2.Calcular mi Índice de masa corporal(IMC)")
                imc(nombre)
                elecc2 = menu(nombre,"Qué hacemos?","1.Volver al Menú principal \n2. Salir",2)
                break
            case 3:
                console.log("caso 3.Chequear mis valores de presión")
                presion(nombre)
                elecc2 = menu(nombre,"Qué hacemos?","1.Volver al Menú principal \n2. Salir",2)
                break
        
            default:
                salir(nombre)
                elecc2 = menu(nombre,"Qué hacemos?","1.Volver al Menú principal \n2. Salir",2)
                break
        }
    } while(elecc2!=2 && eleccPrinc != 4 )
    if (eleccPrinc!=4){
        //Si eligio 4 en el menu principal, ya la despidieron antes. Hago un caso aparte solo si se quisieron ir luego de haber realizado 1,2 o 3
        salir(nombre)
    }
}

function imc(nombre){
    //Obtengo peso y altura
    let peso
    let altura
    do{
        peso = parseFloat(prompt(`${nombre} ingresá tu peso. El peso debe estás en kg . Usá punto (".") en el caso que ingreses decimales.`))
        console.log(`Peso: El usuario ingresó ${peso}`)
    }while(!parseFloat(peso))
    do{
        altura = parseFloat(prompt(`${nombre} ingresá tu altura. La altura debe estar en metros. Usá punto (".") en el caso que ingreses decimales.`))
        console.log(`Altura: El usuario ingresó ${altura}`)
    }while(!parseFloat(altura))
    //Hago el calculo
    let imc = peso/(altura**2)
    //Informo
    alert(`${nombre}, tu IMC es de ${imc}`)
    console.log(`El IMC es de ${imc}`)
    //Analizo que quiere hace el usuario
    /* let elecc
    do {
        elecc = menu(nombre,"Qué hacemos", "1. Ir a menú principal \n2.Salir")
        console.log(`El usuario ingresó ${elecc}`)
    }while(elecc!=1 || elecc!=2 || !Number(elecc)) */

    /* if (elecc == 0){
        salir(nombre)
    } else{
        menuPrincipal(nombre)
    } */
    /* return elecc */
}

function presion(nombre){
    //Obtengo peso y altura
    let sist
    let diast
    let edad
    do{
        sist = parseFloat(prompt(`${nombre} ingresá la presión sistólica.`))
        console.log(`Sistólica: El usuario ingresó ${sist}`)
    }while(!parseFloat(sist))
    do{
        diast = parseFloat(prompt(`${nombre} ingresá la presión diastólica.`))
        console.log(`Diastólica: El usuario ingresó ${diast}`)
    }while(!parseFloat(diast))
    
    //veo en donde cae
    let resultado = `${nombre} los valores de presión ingresados ${sist}/${diast} son correspondientes a `

    if (sist>=180 || diast>=120){
        resultado = resultado + "una Hipertensión de Grado 3. Solicite atención médica."
    }else if ((sist>=160 && diast <120)  || (diast>=100 && sist<180)){
        resultado = resultado + "una Hipertensión de Grado 2. Solicite atención médica."
    }
    else if ((sist>=130 && diast <100) || (diast>=80 && sist<160)){
        resultado = resultado + "una Hipertensión de Grado 1. Agende un control médico."
    }
    else if ((sist>=120 && diast <80) ){
        resultado = resultado + "una Prehipertensión. Agende un control médico."
    }
    else if ((sist>=90 && diast <80) || (diast>=60 && sist<120)){
        resultado = resultado + "tensión normal."
    }
    else {
        resultado = resultado + "tensión baja. Solicite atención médica. "
    }
    alert(resultado)
}

function pedirTurno(nombre){
    let nuevo
    let prepaga
    let especialidad
    let disponibilidad
    especialidad = menu(nombre,"Consulta turnos: Especialidad", "1. Ginecología\n2.Oftalmología\n 3.Cardiología\n 4.Clínica\n 5.Otra",5)
    if (especialidad==5){
        alert("Lo lamentamos, solo contamos con las especialidades listadas")
    }
    disponibilidad = menu(nombre, "Consulta turnos: Disponibilidad horaria \n Atendemos días de semana de 8 a 20 hs", "1. Mañana\n 2. Tarde \n 3. Mañana y tarde",3)
    nuevo = menu(nombre,"Consulta turnos", "1. Soy un paciente nuevo en el consultorio\n 2.Ya me atendí en el consultorio",2)
    if(nuevo == 1){
        let apellido = prompt("Ingresá tu apellido")
        let celular = prompt("Ingresá tu celular sin espacios")
        prepaga = menu(nombre,"Consulta turnos: prepaga/Obra Social", "1. Swiss Medical\n2. OSDE\n3.Otra\n4. No tengo",4)
        if (prepaga <= 2){
            alert("La atención está cubierta por tu prepaga")
        }else if (prepaga == 4){
            alert("La atención no está cubierta por tu prepaga")
        }else{
            alert("Te agendaremos como privado.")
        }
        //alert("Gracias por la información, quedaste registrado")
    }
    let dni = prompt("Ingresá tu DNI sin puntos ni comas")

    alert("Listo! Quedó registrada tu consulta por el turno. Nos vamos a comunicar para enviarte los turnos disponibles.")

}

function salir(nombre){
    alert(`¡Gracias por visitarnos ${nombre}!`)
}

//Diálogo
let nombre = prompt("Bienvenido al sitio web del consultorio! Ingresá tu nombre para comenzar: ")
menuPrincipal(nombre)
//let eleccPrinc = menu(nombre,"Menú principal", "1. Pedir un turno \n 2.Calcular mi Índice de masa corporal \n 3.Chequear mis valores de presión \n 0. Salir")
//console.log(eleccPrinc)

