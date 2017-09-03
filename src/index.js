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
function defaultParameterValue(a, b) {
    if (b === undefined) {
        b = 100;
    }
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
    for (var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);

        return arguments[i];
    }    
}
returnArgumentsArray(5, 10, 50);

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    fn();
}

returnFnResult(function () {
    // console.log('Привет');
});

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
    if (number === undefined) {
        number = 0;
    }    
    var result = number += 1;

    // console.log(result);

    return result;
}
returnCounter();
/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn) {
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
