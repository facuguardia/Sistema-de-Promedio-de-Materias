//Este sistema calculara el promedio de las materias, nos dira si aprobamos o no, si estamos al dia con los trabajos practicos y la asistencia

const materias = {
    fisica: [90,6,3,"fisica"],
    matematias: [84,8,2,"matematicas"], 
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencia >= 90) {
            console.log("%c   Asistencia Perfecta","color:green");
        }else {
            console.log("%c   Falta de Asistencia","color:red");
        }
        if (promedio >=7) {
            console.log("%c   Promedio Perfecta","color:green");
        }else {
            console.log("%c   Promedio Desaprobado","color:red");
        }
        if (trabajos >=3){
            console.log("%c   Trabajps Practicos al dia","color:green");
        }else {
            console.log("%c   Adeuda Trabajos Practicos","color:red");
        }
    }
    
}

aprobo();