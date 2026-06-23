// / – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const foobar = (text) => {
    document.write(`<p>${text}</p>`);
}

foobar('lol');
foobar('super');