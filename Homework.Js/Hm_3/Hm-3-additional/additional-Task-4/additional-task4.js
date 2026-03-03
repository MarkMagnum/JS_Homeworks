// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//

//                      let arr = [];
//                      for (let i = 0; i < 50; i++) {
//                          arr.push(i * 2);
//                      }
//                      console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//                      let arr= [];
//                      for (let i = 0; i < 50; i++) {
//                          arr.push(i*1);
//                      }
//                      console.log(arr);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//                      let arr = [];
//                      for (let i = 0; i < 20; i++) {
//                          arr.push(Math.floor(Math.random() * 100));
//                      }
//                      console.log(arr);
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
//                         let arr = [];
//                         for (let i = 0; i < 20; i++) {
//                             arr.push(Math.floor(Math.random() * (732 - 8)));
//                         }
//                         console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемент
//
//                         for (let i = 2; i < arr.length; i+=3) {
//                             console.log(arr[i]);
//                         }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

//                         for (let i = 2; i < arr.length; i+=3) {
//                             if (arr[i] % 2===0) {
//                                 console.log(arr[i]);
//                             }
//                         }
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
//

//                     let newArr = [];
//                     for (let i = 2; i < arr.length; i+=3) {
//                         if (arr[i] % 2===0) {
//                     newArr.push(arr[i]);    }
//                     }
//                     console.log(newArr);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
//                     let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//                     for (let i = 0; i <arr.length -1; i++) {
//                         if (arr[i+1]  % 2 ===0 ){
//                             console.log(arr[i]);
//                         }
//                     }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//                    let purchases = [100, 250, 50, 168, 120, 345, 188];
//                    let sum =0
//                    for (let i = 0; i < purchases.length; i++) {
//                        sum += purchases[i];
//                    }
//                    let average = sum/purchases.length;
//                    console.log(average);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
//                    let arr = [];
//                    let multiplied = [];
//                    for (let i = 0; i < 10; i++) {
//                        arr.push(Math.floor(Math.random() * 50));
//                     }
//                    for (let i = 0; i < arr.length; i++) {
//                        multiplied.push(arr[i] * 5);
//                    }
//                    console.log(arr);
//                    console.log(multiplied);
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//                    let arr = [1, "hello", true, 25, "world", 100, false];
//                    let numbers = [];
//                    for (let i = 0; i < arr.length; i++) {
//                        if (typeof arr[i] === "number") {
//                            numbers.push(arr[i]);
//                        }
//                    }
//                    console.log(numbers);

