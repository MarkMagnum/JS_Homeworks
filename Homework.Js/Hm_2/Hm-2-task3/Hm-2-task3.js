// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'perva',
    pageCount: 100,
    genre: 'fantastic',
    authors: [
        {name: 'Petro Dudka', age: 20},
        {name: 'Ibrahim Dudka', age: 30},
        {name: 'Ivan Dudka', age: 40}
    ],

};
let book2 = {
    title: 'druha',
    pageCount: 300,
    genre: 'action',
    authors: [
        {name: 'Ibrahim Dudka', age: 40},
        {name: 'Ivan Dudka', age: 50},
        {name: 'Petro Dudka', age: 60}
    ],
};
let book3 = {
    title: 'tretia',
    pageCount: 500,
    genre: 'fantasy',
    authors: [
        {name: 'Ivan Dudka', age: 60},
        {name: 'Petro Dudka', age: 70},
        {name: 'Ibrahim Dudka', age: 80}
    ],
};
console.log (book1, book2, book3);