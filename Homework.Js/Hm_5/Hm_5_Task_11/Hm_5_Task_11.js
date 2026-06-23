
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum =(arr) =>{
    let summary = 0;
    for (const item of arr) {
        summary += item;
    }
    return summary;
}
console.log(sum([1,2,9,6,8,3]));