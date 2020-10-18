 // practice lesson13.JS
// #1 
let result = prompt('input your text', '');
if (result == null){ 
    console.log('cancel was pressed');
} else {
    console.log('ok was pressed');

    if (result > 0) { 
        console.log('1');
    } else if (result < 0) {
        console.log('1');
    }else { 
        console.log(' 0');
    }

} 

// #2
var a = 1;
var n;
if (a> 0) {n = true; }
else {n = false; }

var n = (a > 0) ? 'true' : 'false' ;
console.log(n);

// #3
let b = 5;
let c = 3;

console.log( b > c && b === c );
console.log( true && 0 && 'a' < 'Z' ); // ???
console.log( b > c || true || '2' == 2 || false =='' );
console.log( b < c && 0 == false );
console.log( b !== c || true && '' );

// #4
let result1 = parseInt(prompt('input your switch', 0));
if (result == null){ 
    console.log('cancel was pressed');
} else {
    console.log('ok was pressed');
switch (result1  ) { 
    case 1:
        alert('a');
        break;
    case 2:
        alert('b');
        break;
    case 3:
        alert('c');
        break;
        default:
        alert ('z');

}
}

// #5
let i;
for ( i = 0; i < 10; i++ ) {
   console.log(i*i) ;
}

// #6 

function checkValue (q,w){ 
    return Math.max(q,w)
}
console.log(checkValue(5,2)) ;
