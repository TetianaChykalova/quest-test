//1. Задан массив целых чисел. Написать функцию нахождения максимального элемента в массиве.
function findMax (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}
findMax([1,3,5,8,23,76,1,5,3,45]);

console.log('___');

//2. Реализовать функцию сортировки пузырьком
function sortBabble (arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                let tempVar = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tempVar;
            }
        }
    }
    console.log(arr);
    return arr;
}
sortBabble([1,9,2,3,8,7,6,4,5]);

console.log('___');

//4. Реализовать алгоритм бинарного поиска для нахождения значения в массиве.
//   Вернуть номер элемента или уведомить что такого элемента нет.
function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == num) {
            console.log(mid);
            return mid;
        }
        else if (num < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (!arr.includes(num)) {
        console.log(`This array doesn't includes number ${num}`);
        return `This array doesn't includes number ${num}`;
    }
}
binarySearch ([3,5,7,9], 5);

console.log('___');

//5. Реализовать класс 2-х мерный вектор
//   к сожалению с get/set  дружу не очень, поэтому реализовать с приватными атрибутами не смогла.
//   реализовала с публичными
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //сложение векторов
    add({x,y}) {
        let resultAddX = this.x + x;
        let resultAddY = this.y + y;
        console.log(resultAddX, resultAddY);
    }

    //вычитание векторов
    sub({x,y}) {
        let resultSubX = this.x - x;
        let resultSubY = this.y - y;
        console.log(resultSubX, resultSubY);
    }
    //умножение вектора на число
    scale(n) {
        let resultScaleX = this.x * n;
        let resultScaleY = this.y * n;
        console.log(resultScaleX, resultScaleY);
    }
    //вывод вектора на печать
    print() {
        console.log(`This 2D vector has the next coordinations: x - ${this.x}, y - ${this.y}`)
    }
}

const vector1 = new Vector2D(2,5);
const vector2 = new Vector2D(3,6);
vector1.add(vector2);
vector1.sub(vector2);
vector1.scale(4);
vector1.print();

console.log('___');

//6. Проверка на палиндром. Принимаем во внимание, что входные данные всегда строка.

function strIsPal (str) {
    if(str.length == 0) {
        return false;
    }
    else {
        let res = '';
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i];
        }
        if(res == str) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }
}
strIsPal('fgjhdfjvn');
strIsPal('asdffdsa');