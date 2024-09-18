console.log('Modulo que Importa');

let bello = "Si";
let numDiv2 = 11;
let numPar = 8;
let numSorteo = 1000;

let numComp1 = 30;
let numComp2 = 100;

let numaComparar1 = 654;
let numaComparar2 = 875;
let numaComparar3 = 784;

let dia = "Lunes" //dia de la semana

let calificación = 8

import { fsemana, FunctionBello } from "./funciones.js";
import { div2 } from "./funciones.js";
import { NumPar as fnumPar } from "./funciones.js";
import { sorteofunction } from "./funciones.js";
import { compararVariables } from "./funciones.js";
import { fcompare } from "./funciones.js";
import { funcionCalificacion } from "./funciones.js";

FunctionBello(bello);
div2(numDiv2);
fnumPar(numPar);
sorteofunction(numSorteo);
compararVariables(numComp1,numComp2);
fcompare(numaComparar1, numaComparar2, numaComparar3);
fsemana(dia);
funcionCalificacion(calificación);