// 55% del promedio de sus tres calificaciones parciales
// 30% de la calificación del examen final
// 15% de la calificación de un trabajo final

let c1; 
let c2; 
let c3;
let calfin = 0;
let caltf = 0;
let a, b, c;
let notafin;

c1 = Number(prompt('ingrese su 1ra calificacion '))
c2 = Number(prompt('ingrese su 2da calificacion  '))
c3 = Number(prompt('ingrese su 3ra calificacion  '))
calfin = Number(prompt('ingrese su calificacion del examen final '))
caltf = Number(prompt('ingrese su calificacion del trabajo final '))

promedio =  (c1 + c2 + c3) /3 ;

a = promedio*.55
b = calfin*.30
c = caltf*.15

notafin = a + b +c 

alert(`su calificacion final es: ` +notafin)


