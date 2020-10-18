// HomeWork 17 (practice)
//#1 Написать метод который вернет срока вида "html - 5"


let skill = {
    name: 'html',
    level: 5,
    getFullName: function () {
        return this.name + '-' + this.level;
    }
};
console.log(skill.getFullName());


//#2 Создайте объект calculator с методами:

function calculation(one,two){ 
    this.one = one;
    this.two = two;
    this.sum = function() {
        return this.one + this.two;
    } 
    this.mul = function() {
        return this.one * this.two;
    }

} 
let calculation1 = new calculation(1,2);
let calculation2 = new calculation(5,2);
console.log(calculation1.sum());
console.log(calculation2.mul());