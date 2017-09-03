/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    // console.log(arg);
    return arg;
}
returnFirstArgument(188);

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b = 100) {
    var res = a + b;
    // console.log(res);

    return res;
}
defaultParameterValue(5, 15);

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    var argArray = [];
    
    for (var i = 0; i < arguments.length; i++) {        
        argArray[i] = arguments[i];        
    }    
    // console.log(argArray);

    return argArray;
}
returnArgumentsArray(5, 10, 50);

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn ();
}

returnFnResult(function () {
    // console.log('привет');
});

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0) {
    var numberCounter = function () {
        return ++number;
    }
    // console.log(numberCounter());

    return numberCounter;
}
returnCounter(2);
/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn, ...args) {
    fn = fn.bind(this, ...args);
    // console.log(fn);

    return fn;
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
