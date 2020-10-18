// practice lesson15.JS
// #1  добавлять элементы в массив через метод prompt () пока пользователь не нажмет cancel
let arr = [];
let i = 0;
while (1) {
    let txt = prompt('input your string', 0)
    if (txt === null) {
        break;
    } else {
        arr.push(txt);
    }
}
console.log(arr);

// #2 найти сумму элементов двумерного массива

let Arr1 = [
    [1, 2, 3], // i
    [4, 5, 6],  // q
];
function valueArr1(Arr1) {
    let sum = 0;
    for (let i = 0; i < Arr1.length; i++) {
        for (j = 0; j < Arr1[i].length; j++) {
            sum += Arr1[i][j];
        }
    }
    console.log(sum);
}
valueArr1(Arr1);

//#3 разбить строка lorem по разделитель “ “ и вывести в консоль слова длиной более 5

let str = 'Lorem ipsum, dolor, adipisicing elit Enim, dolore';
let arr2 = str.split(", ");
console.log(arr2);
if (arr2[0].length >= 5) {
    console.log(arr2[0]);
} if (arr2[1].length >= 5) {
    console.log(arr2[1]);
} if (arr2[2].length >= 5) {
    console.log(arr2[2]);
} if (arr2[3].length >= 5) {
    console.log(arr2[3]);
}


//#4 дано массив [1, 9, 22, 7, 6] добавить число 8 после 22


let arr3 = [1, 9, 22, 7, 6];
arr3.splice(3, 0, 8);
console.log(arr3);

//#5 написать функцию randomNumber (number), которая наполняет массив случайными числами от 0 до 100, где number - длина массива
let arr4 = [];
function randomNumber(arr4) {

    for (let i = 1; i <= 100; i++) {
        var a = Math.round(Math.random() * 100);
        arr4.push(a);
    };
    console.log(arr4);
    console.log(arr4.length);
}
randomNumber(arr4);

//#6 проверить в массиве есть число, которое вводится через prompt ()

let arr5 = [1, 2, 3,5];
let json = JSON.stringify(arr5);

let num = prompt('write a number');
if ( json.indexOf(num) === -1){
    console.log('no')
} else {    console.log('yep');}






//#7 с помощью метода forEach найти самое длинное слово в строке lorem


function longestWord(string) {
    let str7 = string.split(" ");
    let longest = 0;
    let word = null;
    str7.forEach(function (str7) {
        if (longest < str7.length) {
            longest = str7.length;
            word = str7;
        }
    });
    return word;
}
console.log(longestWord("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, numquam!"));


//#8 с помощью метода map создать массив квадратов массива


let arr8 = [8, 6, 12, 10].map(item => item*item);
console.log(arr8)






