var age = prompt("Вам есть 18?");
function checkAge(age){
    if(age> 18){
        return true;
    }else{
        return confirm("Родители разрешили?");
    }
}

if(checkAge(age)){
    alert("дбро");
}else{
    alert("нельзя");
}
//
function checkAge(age){
    return (age > 18) ?  true :  confirm("уверены");
    //return (age>18) || confirm("точно");
}
//
var a = 2;
var b = 5;
function min(a,b){
     if(a<b){
        return console.log(a); 
    }else return console.log(b);
}
console.log(min());
// неработает

function pow(x,n){
var rez = x;
for(var i = 1;i<n;i++){
    rez *=x;
}
return rez;
}
var x = prompt("ВВедите x","");
var n = prompt("ВВедите n","");

if(n<=1){
    alert("Степень n неподдерживается,введите большую чем 1");
}else{
    alert(pow(x,n));
}
alert(pow);
//
var f = function(person){
    alert("Привет " + person);
}
f("Саша");

