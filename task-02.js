// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li, после
// чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.style.listStyle = "none";
 console.dir(ingredientsList);

ingredients.forEach(elem => {
// создание элементов
const ingredientItem = document.createElement('li');
// console.dir(ingredientItem);
// ДОБАВЛЕНИЕ СВОЙСТВ
ingredientItem.textContent = elem ;
console.log(ingredientItem);
// ВСТРАИВАНИЕ СОЗДОНОГО ЭЛЕМЕНТА
ingredientsList.append(ingredientItem);
  // console.log(elem);
})



