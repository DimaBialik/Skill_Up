// HomeWork 19 (practice)
//#1 
//найти ul элемент 
//найти другой li

    let nodes = document.body.children;  
        for ( let i = 0; i<nodes.length; i++ ){ 
            if (nodes[i].nodeName == "UL") { 
               console.log(nodes[i].nodeName);
               let children = nodes[i].children;
               let cnt = 0;
               for  (let j = 0; j < children.length; j++){ 
                if (children[j].nodeName == "LI") { 
                    if(cnt == 1) {
                        console.log(children[j].innerHTML)
                    }

                    cnt++;

                }
               }
            }  
        }
        
//#2 
//найти элемент с классом list 
// найти другой li и изменить в нем текст
// сделать текст в div красным

let ul = document.getElementsByClassName('list')[0];
let li = ul.children[1];
li.innerHTML = "qwerty"

let div = document.getElementsByTagName('div')[0];
div.style = "color:red";


// #3
// к чекбоксах добавить атрибут checked
// если пункт имеет класс "text" то удалить его и наоборот

let check = document.querySelector('input');
check.setAttribute('checked', 'checked');
console.log(check);
let list = document.getElementsByClassName('list')[0];
list.classList.remove('list');
list.classList.add('list');
list.classList.toggle('list');
console.log(list);

// // #3
// добавить в список 5 элементов li с текстом от 1 до 5

let ul1 = document.getElementsByTagName("ul")[0];
for ( let i = 1; i <= 5; i++) { 
    let li1 = document.createElement ( 'li');
    // li1.setAttribute('class', 'new')
    li1.innerHTML=i;
    ul1.appendChild(li1)
}


