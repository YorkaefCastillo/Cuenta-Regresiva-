let dias = 10
let horas = 24
let minutos = 0
let segundos = 0
cargarSegundos();
cargarMinutos();

//Definimos y ejecutamos los segundos 
function cargarSegundos(){
    let txtSegundos
    if (segundos < 0){
        segundos = 59;
    }

    //mostrar segunbdos en pantalla
    if (segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos=segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;


    cargarMinutos(segundos);
}
//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMunitos;

    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        },500)
        
    }else if (segundos == -1 && minutos == 0){
        setTimeout(() => {
            minutos = 59;
        },500)
    }

    //Nostrar minutos en pantalla
    if (minutos < 10){
        txtMunitos = `0${minutos}`;

    }else {
        txtMunitos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMunitos;
    cargarHoras(segundos,minutos);
}
function cargarHoras(segundos,minutos){
    let txtHoras
    if(segundos == -1 && minutos ==0 && horas !==0){
        setTimeout(() => {
            horas--;
        },500);
    }else if (segundos == -1 && minutos ==0 && horas ==0){
        setTimeout(() => {
            horas = 2;
        },500);
    }
    //Mostrar Hora en Pantalla
    if ( horas < 10){
        txtHoras = `0${horas}`;
    }else {
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
    cargarDias(segundos,minutos,horas);
    
}
function cargarDias(segundos,minutos,horas){
    let txtdias
    if(segundos == -1 && minutos ==0 && horas ==0 && dias !==0){
        setTimeout(() => {
            dias--;
        },500);
    }else if (segundos == -1 && minutos ==0 && horas ==0 && dias ==0){
        setTimeout(() => {
            dias = 7;
        },500);
    }
    //Mostrar Hora en Pantalla
    if ( dias < 10){
        txtdias = `0${dias}`;
    }else {
        txtdias = dias;
    }
    document.getElementById('dias').innerHTML = txtdias;
}
//ejecutamos cada segundo
setInterval(cargarSegundos, 1000);

