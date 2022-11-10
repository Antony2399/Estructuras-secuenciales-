let numestudiates;
let hombres;
let mujeres;
let porsentajeh = 0;
let porsentajem = 0; 

numestudiates = Number(prompt('ingrese cantidad de estudiantes'))
hombres = Number(prompt('ingrese cantidad de estudiantes hombres'))
mujeres = Number(prompt('ingrese cantidad de estudiantes mujeres'))
porsentajeh = (hombres/numestudiates)*100;
porsentajem = (mujeres/numestudiates)*100;

alert(`el porsentajes de hombres es: ${porsentajeh}% y el de mujeres es: ${porsentajem} % en un total de ${numestudiates} estudiantes` )