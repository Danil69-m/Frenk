cop = 100; 
rub = 0; 
gri = 0; 
alt = 0; 
polush = 0; 
function r (cop){ 
    rub = cop / 100; 
     
    return rub.toFixed(2);; 
} 
function g (cop){ 
    gri = cop / 10; 
    return gri.toFixed(2);; 
} 
function a (cop){ 
    alt = cop / 3; 
    return alt.toFixed(2);; 
} 
function p (cop){ 
    polush = cop / 0.25; 
    return polush.toFixed(2);; 
} 
ruz = r(cop); 
ruz1 = g(cop); 
ruz2 = a(cop); 
ruz3 = p(cop); 
document.write("<br>");
document.write("<br>");
document.write(ruz + " "+ ruz1 + " " + ruz2 + " " + ruz3); 
 
D1 = 2; 
D2 = -2; 
D3 = 3; 
function fi (D1){ 
    if(D1> 0){ 
       return D1 = Math.pow(D1, 2); 
    } 
    else{  return D1 = Math.pow(D1, 4); } 
     
} 
function fi1 (D2){ 
    if(D2> 0){ 
      return  D2 = Math.pow(D2, 2); 
    } 
    else{ return D2 = Math.pow(D2, 4); 
     } 
     
} 
function fi2 (D3){ 
    if(D3> 0){ 
      return  D3 = Math.pow(D3, 2); 
    } 
    else{ return D3 = Math.pow(D3, 4); } 
     
} 
Ruz = fi(D1); 
Ruz1 = fi1(D2); 
Ruz2 = fi2(D3); 
document.write("<br>");document.write("<br>");
document.write('<br>'+Ruz +" "+ Ruz1+" "+ Ruz2); 
 
function myfunc() 
{ 
let a,b,c; 
 
a=parseInt(document.myform.X.value); 
b=parseInt(document.myform.Y.value); 
 
switch(document.myform.op.value) 
{ 
case "1": c=a+b; break; 
case "2": c=a-b; break; 
case "3":c=a*b;break; 
case "4":  if (b !== 0) {
    c = (a / b).toFixed(2); 
} else {
    c = "Деление на ноль невозможно";
}
break; 
default: c="Не опознан номер операции"; break; 
} 
document.myform.Otvet.value=c; 
return true; 
}

let Rost = [170 , 165 , 180];
document.write("<br>");
document.write("<br>");
Rost.forEach(element => {
    document.write(element+ " ");
});
document.write("<br>");
function  ROst(Rost){
  
  let minHe = Rost[0];
  let maxHe = Rost[0];

  
  for (let i = 1; i < Rost.length; i++) {
      if (Rost[i] < minHe) {
          minHe = Rost[i];
      }
      if (Rost[i] > maxHe) {
          maxHe = Rost[i];
      }
  }

  let dif = maxHe - minHe;
  let rUz = `
  Самый высокий рост: ${maxHe} см<br>
                Самый низкий рост: ${minHe} см<br>
                Разница: ${dif} см
  `;
  return rUz;
}

document.write(ROst(Rost));
document.write("<br>");
document.write("<br>");
let Mass = [3 , 6 , 8 , 1 ,100 , 2 , 5 ,0 ,-1 , 6];
Mass.forEach(element => {
    document.write(element+ " ");
});
let cunt = 0;
let FinMas =[];
function MAss (Mass , cunt , FinMas){
    for(i = 0 ; i < Mass.length ; i++){
     if(Mass[i] % 2 != 0){
        FinMas.push(Mass[i]);
        cunt++
     }
    }
return cunt;
}
document.write("<br>");
document.write("Количество не чётных чисел в массиве: " + MAss(Mass , cunt , FinMas)+ "<br>");
FinMas.forEach(element => {
    document.write(element+ " ");
});