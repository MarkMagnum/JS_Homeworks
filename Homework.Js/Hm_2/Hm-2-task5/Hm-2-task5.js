// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temps = [
    {
        day: 'Monday', values: {
            morningTime: 10,
            dayTime: 25,
            nightTime: 1
        },
    },
    {
        day: 'Tuesday', values: {
            morningTime: 8,
            dayTime: 30,
            nightTime: 4
        },
    },
    {
        day: 'Wednesday', values: {
            morningTime: 13,
            dayTime: 26,
            nightTime: 2
        },
    },
    {
        day: 'Thursday', values: {
            morningTime: 14,
            dayTime: 24,
            nightTime: 3
        },
    },
    {
        day: 'Friday', values: {
            morningTime: 14,
            dayTime: 22,
            nightTime: 4
        },
    },
    {
        day: 'Saturday', values: {
            morningTime: 12,
            dayTime: 21,
            nightTime: 5
        },
    },
    {
        day: 'Sunday', values: {
            morningTime: 11,
            dayTime: 23,
            nightTime: 6
        },
    }
]
console.log(temps[0]);
console.log(temps[1]);
console.log(temps[2]);
console.log(temps[3]);
console.log(temps[4]);
console.log(temps[5]);
console.log(temps[6]);

