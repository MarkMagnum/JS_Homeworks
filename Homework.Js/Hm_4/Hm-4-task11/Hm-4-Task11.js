// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let summary = 0;
    for (const item of arr) {
        summary = summary + item;
    }
    return summary;
}
console.log(sum([1,3,4,6,6,3]));