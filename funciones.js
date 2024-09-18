console.log('Modulo que exporta | API Publica');

function Eresbello(varBello){
    if(varBello === "Si"){
        console.log("Ciertamente, eres : Guapo, poderoso, asombroso Muy hermoso, soy precioso, armonioso Un buen socio, misterioso, buena gente Detergente, muy majete, inteligente Nada ojete, irreverente, un exponente Muy perfecto es lo que eres");
    }else{
        console.log("No te Creo");
    }

}
function div2(numeroDiv){
    if((numeroDiv % 2) == 0){
        console.log(`${numeroDiv} es divisible entre 2`);
    }else{
        console.log(`${numeroDiv} no es divisible entre 2`);
    }

}

function numEsPar(numPar){
    if((numPar % 2) == 0){
        console.log(`${numPar} es par`);
    }else{
        console.log(`${numPar} es impar`);
    }
}

function sorteo(varnumSorteo){
    if(varnumSorteo == 1000){
        console.log('Ganaste !!!');
    }
    else{
        console,log(`Lo sentimos, el numero: ${varnumSorteo} no es premiado, sigue participando`)
    }
}

function compararVariables(Num1, Num2){
    if(Num1> Num2){
        console.log(`${Num1} es mayor a ${Num2}`);
    }else{
        console.log(`${Num2} es mayor a ${Num1}`);
    }

}

function v3acomparar(num1, num2, num3){

    let mayor;


    if (num1 >= num2 && num1 >= num3) {
    
      mayor = num1;
    
    } else if (num2 >= num1 && num2 >= num3) {
    
      mayor = num2;
    
    } else {
    
      mayor = num3;
    
    }
    
    
    // Mostrar el resultado
    
    if (num1 == num2 && num1 == num3) {
    
      console.log("Los tres números son iguales");
    
    } else if (num1 == num2 || num1 == num3 || num2 == num3) {
    
      console.log("Hay dos números iguales, y el mayor es: "+mayor);
    
    } else {
    
      console.log("El número mayor es: " +mayor);
    
    }
    
}
function fsemana(dia){

    if(dia == "Lunes"){

        console.log("Hoy es Lunes, hay que chambiar");
    
    }else if(dia == "Viernes"){
    
        console.log("Hoy es Viernes, toca chelas");
    
    }else if(dia == "Sabado" || dia == "Domingo"
    ){
    
        console.log("Es fin de semana, a descansar");
        
    }else {
        console.log("Animo");
    
    }

}

function fCalificacion(vCali){
    if(vCali<=10 && vCali>=1){
        if(vCali<6){
            console.log("Reprobado");
        }else if(vCali >=6 && vCali<=8){
            console.log("Regular");
        }else if(vCali == 9){
            console.log("Bien");
        }else{
            console.log("Exelente");
        }
    
    }else{
        console.log("no se puede poner numeros mayores a 10 y menores a 1");
    }



}
export {Eresbello as FunctionBello};
export {div2 as div2};
export {numEsPar as NumPar};
export {sorteo as sorteofunction};
export {compararVariables}
export {v3acomparar as fcompare};
export {fsemana};
export {fCalificacion as funcionCalificacion}