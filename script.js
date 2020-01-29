/*
//шахматы для поля любого размера
 return maxim
let s = 8, b = '';
for ( let x = 0; x < s; x ++ ){
    for ( let y = 0; y < s; y++ ){( (x + y) % 2 == 0 )?b += ' ':b += '#'}
    b += '\n';
}
console.log(b);


// рекурсия //

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(21));


// функция наименьшего числа //

const min = (a, b) => a<b?a:b;
console.log(min(817, 3758));


// количество одинаковых символов с произвольной строке //

const colSymb = str =>{
    let col = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'B'){
            col += 1;
        } 
    }
    return col;
}
console.log(colSymb('BCBCB'));


// массивы //

let listOfNumbers = [2, 3, 5, 7, 11, 13];
console.log(listOfNumbers.length);

let doh = "Эгегей";
console.log(doh.toUpperCase());

let arr = [1, 2, 3, 4, 5];  
arr.push(99); // метод добавления нового элемента

// удаляет и возращает последнее значение в массиве
console.log(arr.pop());


// объекты //

let day1 = {
    squirel: false,
    events: ['действие 1', 'действие 2', 'действие 3'],
    'ещё одно событие': 'новое событие'
};

day1.events[1] = 'действие n';

day1.newEvents = 'n-событие';

delete day1['ещё одно событие'];

console.log(Object.assign(day1, {events1: 'событие-1'}));


let journal = [];
    add = (events, squirel) => {journal.push({events, squirel})};

add(["работал", "трогал дерево", "ел пиццу", "бегал", "смотрел телевизор"], false);
add(["работал", "ел мороженое", "ел цветную капусту", "ел лазанью", "трогал дерево", "чистил зубы"], false);
add(["выходной", "катался на велосипеде", "отдыхал", "ел арахис", "пил пиво"], true);
add(["работал", "ел пиццу", "делал дело 3", "делал дело 4", "делал дело 5"], true);


function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2])); 
}

console.log(phi([76, 9, 4, 1])); 


function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table; 
}


for(let entry of journal){
    console.log(`было ${entry.events.length} событий в этот день`);
}

const journalEvents = journal => {
    let events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal)));
}


// JSON //

let string = JSON.stringify({squirrel: false, events: ["выходной"]});
console.log(string); 

console.log(JSON.parse(string).squirrel);


// создание массива произвольной длинный //


let createArr = (start, end, iter) => {
    let arr = [];
    if(start < end && iter !== undefined){
        for(start; start <= end; start += iter){
            arr.push(start);
        }
    } else {
        for(start; start >= end; start += iter){
            arr.push(start);
        }
    }
    for(start; start <= end; start++){
        arr.push(start);
    }
    return arr;
}

// вычисление суммы всех эл-ов массива //

let sum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// обратный порядок эл-ов массива //


let reverseArr = arr => {
    newArr = [];
    for(let i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArr(createArr(-10, 0)));

const cash = new WeakMap()

      cashUsers = user => {
        if(!cash.has(user)){
              cash.set(user, Date.now())
        }
        return cash.get(user)
      }

let maxim = {name: 'Maxim'}
let nikita = {name: 'Nikita'}

cashUsers(maxim)
cashUsers(nikita)

console.log(cash.get(maxim))
console.log(cash.has(nikita))

*/
const myArr = [1,2,3,4,5,6,7,8,9];

// Array.prototype.mySplice = function(a,b){
//     var arr = this;
//     while( b>0 ){
//         delete this[a];
//         a++;
//         b--
//     }
//     arr = arr.filter( a => a !== undefined);
//     return arr;
// }


const mySplice = (a,b) => {
    let arr = [1,2,3,4,5,6];
    for ( i=a ; i < arr.length; i++ ){
    if( b>0 ){
    delete (arr[i]);
    b--
    }
    }
    Array.prototype.funcDelete = function(arr){
        newArr = [];
        for(let i = 0 ; i< arr.length; i++){
            if (arr[i] !== undefined){
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
    arr.funcDelete();   
    return arr;
}
//new coment
