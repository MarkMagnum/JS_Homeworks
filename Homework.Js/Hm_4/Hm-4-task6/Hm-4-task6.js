// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function foobar(list) {
    document.write(`
    <ul>
    <li>${list}</li>
    <li>${list}</li>
    <li>${list}</li>
</ul>
    `)
}
foobar(`super`)