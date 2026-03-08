// #bovDJDTIjt

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function foobar(users) {
    for (const user of users) {
        document.write(`<div> ${user.id} ${user.name} ${user.age} </div>`);
    }
}

foobar([
        {id: 1, name:`Ivan`, age: 32},
        {id: 2, name:`sdvsdv`, age: 12},
        {id: 3, name:`Isdvsvan`, age: 64},
        {id: 4, name:`sdvsd`, age: 34},
        {id: 5, name:`sdvsddsc`, age: 32},
        {id: 6, name: `gfn`, age: 65},
        {id: 7, name:`erte`, age: 87},
]);