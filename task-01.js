//В HTML есть список категорий ul#categories.


//  Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

let list_2 = document.querySelector('#categories');//node list
// let list = document.getElementById('categories');

let list_1 = document.getElementsByClassName('categories-list');//HTML colections array like object
// console.log(list_1);

// console.log(Array.from(list_1));
// Array.from(list_1);
// console.log([...list_1]);
// console.log(list_1.length);
let list_3 = document.querySelectorAll('.item');
let catigoriesCaunt = list_3.length;
// console.log(`В списке ${catigoriesCaunt} категории`);

list_3.forEach((elem, index) => {
  let h2 = document.querySelectorAll('h2');

  let li = document.querySelectorAll('li.item ul');

  console.log(`Категория: ${h2[index].textContent}`);
  console.log(`Количество элементов: ${li[index].children.length}`);
})



