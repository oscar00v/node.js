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




export {Eresbello as FunctionBello};
export {div2 as div2};
export {numEsPar as NumPar};
export {sorteo as sorteofunction};
