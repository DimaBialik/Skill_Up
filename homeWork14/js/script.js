 // practice lesson14.JS
// #1 
let rand = function(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;}

    let val  = rand(1,100);
    let indentVal = function(Val) { 
        if (val % 2 === 0) {
            console.log('четное' + val);
        } else { 
            console.log('нечетное' + val);
        }
    }
    indentVal(val);


    // #2
    
let str = 'lorem ipsum is simply dummy';
let str2 = str.replace('lorem','LOREM');
console.log(str2);
//-------------------------------------
let str3 = 'lorem ipsum is simply dummy'; 
let cursiveLetter = function (str3) {
return str3.charAt(0).toUpperCase()  + str3.slice(1);
}
cursiveLetter(str3);
console.log(cursiveLetter(str3));
// как слово сделать заглавным не понял 


// #3

let q = 'lorem';
let w = 'loremLorem';
let e = q.length;
let t = w.length;
 
function checkValue (e,t){

if (e > t) {
    console.log('lorem is bigger');
} else { 
    console.log('loremLorem is bigger');
}};
checkValue (e,t);


