// HomeWork 18 (practice)
//#1 
// Если переменная больше нуля и меньше 5-ти, 
//то выведите "Верно", в противном случае выведите "Неверно".
// let a=4;
// console.log(a > 0 && a < 5 ? "Right!" : "Wrong");

// //#2
// //Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
// //Если она имеет значение '1', то в переменную result запишем "зима", 
// //если имеет значение "2" - "весна" и так далее. 
// //Решите задачу через switch-case.


// let num = 1;
// switch(num) { 
//     case 1: console.log('winter');
//     break;
//     case 2: console.log('sprig');
//     break;
//     case 3: console.log('summer');
//     break;
//     default:  console.log('autumn');
// }

// //#3 
// //Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" 
// //тремя различными способами (через substr, substring, slice).

// let str = 'aaa bbb ccc';
// console.log(str.substr(4,3));
// console.log(str.substring(7,4));
// console.log(str.slice(4,7));

// // #4
// // Данная строка 'I learn javascript! ". Найдите позицию подстроки "learn" 
// //и длину строки. Заменить javascript на html

// let str = 'I learn javascript!';
// console.log(str.indexOf('learn'));
// console.log(str.length);
// let str2 = str.replace('javascript', 'html' );
// console.log(str2);

// // #5
// //Проверьте, что строка начинается на http: //


// let item = 'https://www.google.com.ua/';
// console.log(item.startsWith('http://'));

// // #6
// //Сделайте функцию, принимает параметром число от 1 до 7,
// // а возвращает день недели.

function day(num) {

}


////  #7
// //С помощью цикла for сформулируйте строку '-1-2-3-4-5-6-7-8-9- 
// //"и запишите ее в переменную str

// str2 = '';
// for ( let i=1;i<10;i++){
//    str2 = str2+"-";
//    str2 = str2 + i;
// }
// console.log(str2)


////  #8 
////Выведите 10 случайных чисел с помощью цикла

function rand(num) {
    for (let i = 0; i < num.length; i++) {
        if (Math.random() < 1 / 2) {
            let a = num[i];
            let b = Math.floor(Math.random()) * num.length;
            num[i] = num[b];
            num[b] = a;
        }
    }
} console.log(rand(10))

