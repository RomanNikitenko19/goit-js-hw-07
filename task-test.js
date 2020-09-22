//ЧЕРНЕТКА

// function sum(num) {
//   let result = num;
//   function f(s) {
//     result += s;
//     console.log(result);
//     return f;
//   }

//   console.log(result);
//   return f
// }
// sum(1);
// sum(1)(2)(3);

// numbers.forEach(function (element, index, array) {
  //   console.log(element);
  //   console.log(index);
  //   console.log(array);
  // })

// const numbers = [5, 10, 15, 20, 25];
// const mappedNumbers = numbers.map(function (element, index, array) {

  //   return element * 2
  // });
  //оригінальний масив
  //console.log(numbers);
  //змінений масив після проходження методом map
  //console.log(mappedNumbers);

//   const players = [
//         { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//         { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//         { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
//         { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//         { id: 'player-5', name: 'Chelse', timePlayed: 80, points: 48, online: true },
// ];

// сортування гравців по часу від більшого до найменшого значення
// const sortBytimePlayed = [...players].sort(function (prevPlayer, nextPlayer) {
//   return nextPlayer.timePlayed - prevPlayer.timePlayed;
// });
// console.table(players);
// console.table(sortBytimePlayed);

// сума часу знаходженя всіх гравців у грі
// const totalTimePlayed = players.reduce((accomulator, player) => accomulator + player.timePlayed, 0);
//повертає всіх гравців із значенням true
//через => функцію
// const onlainePlayers = players.filter(player => player.online);
//   console.table(onlainePlayers);

// const onlainePlayers = players.filter(function (player) {
//   // повертає всіх онлайн із значенням true
//   return player.online
// });
// console.table(onlainePlayers);

// const offLinePlayers = players.filter(function (player) {
//   // повертає всіх онлайн із значенням false
//   return !player.online
// });
// console.table(offLinePlayers);

// const hardcorePlayers = players.filter(function (player) {
//   //поверне всіх гравців у кого час знаходження у грі більше 200 годин
//   return player.timePlayed > 200;
// });
// console.table(hardcorePlayers);

// const bestPlayers = players.filter(function (player) {
//   //повертає віх гравців у кого кількість балів вища за 70
//   return player.points > 70;
// });
// console.table(bestPlayers);

// const playerName = 'Kivi';
// const player = players.find(function (player) {
//   //знайде гравця з іменем
//   return player.name === playerName;
// });
// console.log(player);


// const isAllonline = players.every(function (player) {
//       return player.online;
// });
// console.log(isAllonline);

// const averagedInPlayerTime = players.every(function (player) {
//   //перевіряє чи всі гравці грали більше 75
//       return player.timePlayed > 75;
// });
// console.log(averagedInPlayerTime);

// const isAniOnline = players.some(function (player) {
//   //перевіряє чи хоча б один гравець online
//   return player.online;
// });
// console.log(isAniOnline);

// const numbers = [5, 10, 15, 20, 25];
// const numbers = [10, 10, 10, 10, 10];

// const total = numbers.reduce(function (accumulator, number, index, array) {
  // console.log(`accumulator: ${accumulator}`);
  // console.log(`number: ${number}`);
  // console.log(`index: ${index}`);
  // console.log(`array: ${array}`);
  // return accumulator + number
// }, 0);//початкове значення аккамулятора
// console.log(total);
//const totalTimePlayed = players.reduce((accomulator, player) => accomulator + player.timePlayed, 0);
// const totalTimePlayed = players.reduce(function(accumulator, player) {
//   return accumulator + player.timePlayed
// }, 0);
// console.log(totalTimePlayed);

// const players1 = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kivi', isOnline: true, rank: 400 },
// ];
// const onlineAndSorted = players1.filter(function (player) {
//   return player.isOnline
// })
//   .sort(function (prevPlayer, nextPlayer) {
//   return prevPlayer.rank - nextPlayer.rank
// })
// console.table(onlineAndSorted);

// const arr = [{
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10
//   },
//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12
//   }
// ];
// // == task-1 == //!!!
// отримати масив вчених що народилися в 19 ст

// const scientistsAreBorn = arr.filter(function(teachings) {
//   return teachings.born > 1799
// });
// console.table(scientistsAreBorn);

// // == task-2 == //!!!
// знайти суму років скільки прожили всі вченні

// const alldead = arr.reduce(function(accomulator, erudite) {
//   return  accomulator + erudite.dead
// }, 0);

// const allborn = arr.reduce(function(accomulator, erudite) {
//   return accomulator + erudite.born
// }, 0);
// console.log(alldead);
// console.log(allborn);
// console.log(`всі вченні прожили ${alldead-allborn}р `)

// // == task-3 == //!!!
// Відсортувати вчених по алфавіту

// const sortErudite =[... arr].sort(function(prevErudite, nextErudite) {
//   return prevErudite.surname.charCodeAt(0) - nextErudite.surname.charCodeAt(0)
// });
// console.table(sortErudite);

// // == task-4 == //!!!
// Відсортувати вчених по кількості прожитих років
// const sortEruditeBirthday = arr.sort(function(prevErudite, nextErudite) {
//   return (prevErudite.dead - prevErudite.born) - (nextErudite.dead - nextErudite.born)
// });
// console.table(sortEruditeBirthday);

// // == task-4.1 == //!!!
//Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
// const searchOfEruditen = arr.filter(function(erudite) {
//   return erudite.born < 1400 || erudite.born > 1699
// });
// console.table(arr);
// console.table(searchOfEruditen);
// // // == task-5 == //!!!
// Знайти вченого який народився найпізніше.

// const sortEruditeBirthday = arr.sort (function(prevErudite, nextErudite) {
//   return nextErudite.born - prevErudite.born
// });
// console.table(sortEruditeBirthday);
// console.log(sortEruditeBirthday[0]);

// // == task-6 == //!!!
// Знайти рік народження Albert Einstein
// const eruditeName = 'Albert';
// const erudite = arr.find(function(erudite) {
//   return erudite.name === eruditeName;
// });
// console.log(erudite);
// console.log(erudite.born);

// // == task-7 == //!!!
//знайти вчених прізвище яких починається на літеру С
// const eruditeSurname = 'C';
// const filterEruditeSurname = arr.filter(function(erudite) {
//   return erudite.surname[0] === eruditeSurname;
// });
// console.log(filterEruditeSurname);

// == task-8 == //!!!
//Видалити з масива всіх вчених імя яких починається на A
// const EruditeName = 'A';

// const filterEruditeName = arr.filter(function(erudite) {
//   return erudite.name[0] !== EruditeName
// });

// console.table(filterEruditeName)

// // == task-9 == //!!!
// Знайти вченого який прожив найбільше і вченого який прожив найменьше
// const sortEruditeBirthday = arr.sort(function(prevErudite, nextErudite) {
//   return (prevErudite.dead - prevErudite.born) - (nextErudite.dead - nextErudite.born)
// });
// console.table(sortEruditeBirthday);
// console.log(sortEruditeBirthday[0]);
// console.log(sortEruditeBirthday[11]);

// // == task-10 == //!!!
// Знайти вчених в яких співпадають перші літери імені і прізвища
// const filterEruditeNameAndSurname = arr.filter(function(erudite) {
//   return erudite.name.charCodeAt(0) === erudite.surname.charCodeAt(0)
// });
// console.table(filterEruditeNameAndSurname);

// // == task-11 == //!!!
// Дізнатися чи всі вченні працювали в 19 столітті
// const scientistsAreBorn1 = arr.every(function(erudite) {
//   return erudite.born > 1799
// });
// console.log(scientistsAreBorn1);
// const array = [1,2,3,4,5,6,7,8,9,10];
// const newArray = [];
// array.forEach(function(element) {
//   return newArray.push(element *= element)
// })
// console.log(newArray);

// const numbers = [1,10,15,21,-5,9,14];
// const number = [];
// numbers.forEach(function(item) {
//   return number.push(item += item);
// });
// console.log(number);

// const numbers = [1,-10,15,20,-5,8,14];
// const neg = numbers.filter(function(element) {
//   return element < 0
// });
// console.log(neg);
// const hasNeg = numbers.some(function(item) {
//   //перевіряє чи хоч один елемент масиву менше 0
//   return item < 0;
// });
// console.log(hasNeg);
// const hasNeg3 = numbers.every(function(item) {
//   //перевіряє чи всі елементи >= 0
//   return item >= 0;
// });
// console.log(hasNeg3);

// const sum = numbers.reduce(fuunction(total, item) {

// console.log(total);
// console.log(item);
//   return total + item
// }, 0);
// console.log(sum);

// const users = [{
//   id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//   name: 'Moore Hensley',
//   email: 'moorehensley@indexia.com',
//   eyeColor: 'blue',
//   friends: ['Sharron Pace'],
//   isActive: false,
//   balance: 2811,
//   skills: ['ipsum', 'lorem'],
//   gender: 'male',
//   age: 37,
// },
// {
//   id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//   name: 'Sharlene Bush',
//   email: 'sharlenebush@tubesys.com',
//   eyeColor: 'blue',
//   friends: ['Briana Decker', 'Sharron Pace'],
//   isActive: true,
//   balance: 3821,
//   skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//   gender: 'female',
//   age: 34,
// },
// {
//   id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//   name: 'Ross Vazquez',
//   email: 'rossvazquez@xinware.com',
//   eyeColor: 'green',
//   friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   isActive: false,
//   balance: 3793,
//   skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//   gender: 'male',
//   age: 24,
// },
// {
//   id: '249b6175-5c30-44c6-b154-f120923736f5',
//   name: 'Elma Head',
//   email: 'elmahead@omatom.com',
//   eyeColor: 'green',
//   friends: ['Goldie Gentry', 'Aisha Tran'],
//   isActive: true,
//   balance: 2278,
//   skills: ['adipisicing', 'irure', 'velit'],
//   gender: 'female',
//   age: 21,
// },
// {
//   id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//   name: 'Carey Barr',
//   email: 'careybarr@nurali.com',
//   eyeColor: 'blue',
//   friends: ['Jordan Sampson', 'Eddie Strong'],
//   isActive: true,
//   balance: 3951,
//   skills: ['ex', 'culpa', 'nostrud'],
//   gender: 'male',
//   age: 27,
// },
// {
//   id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//   name: 'Blackburn Dotson',
//   email: 'blackburndotson@furnigeer.com',
//   eyeColor: 'brown',
//   friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   isActive: false,
//   balance: 1498,
//   skills: ['non', 'amet', 'ipsum'],
//   gender: 'male',
//   age: 38,
// },
// {
//   id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//   name: 'Sheree Anthony',
//   email: 'shereeanthony@kog.com',
//   eyeColor: 'brown',
//   friends: ['Goldie Gentry', 'Briana Decker'],
//   isActive: true,
//   balance: 2764,
//   skills: ['lorem', 'veniam', 'culpa'],
//   gender: 'female',
//   age: 39,
// },
// ];
// console.log(users);
//Получить массив имен всех пользователей (поле name).
// const getUserNames = users => {
//   const result = users.map(user => user.name);
//   return result;
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   const result = users.filter(user => user.eyeColor === color );
//   return result;
// };

// console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   const result = users.filter(user => user.gender === gender);
//   return result.map(user => user.name)
// };

// console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   const result = users.filter(user => !user.isActive);
// return result
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   const result = users.find(user => user.email === email);
//   return result
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const result = users.filter(user => user.age > min && user.age < max);
//   return result
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   const result = users.reduce((total, user) => total + user.balance, 0);
//   return result
// };
// console.log(calculateTotalBalance(users)); // 20916

//Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   const result = users.filter(user => user.friends.includes(friendName))
//   return result.map(user => user.name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   const result = users.sort((a, b) => a.friends.length - b.friends.length);
//   return result.map(user => user.)
// };

// console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   return users.reduce((array, user) => {
//     array.push(...user.skills)
//     return array
//   }, []).filter((elem, index, array) => index === array.indexOf(elem)).sort();
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud


// const body = document.querySelector('body');

// for (let index = 0; index < 3; index++) {
//   const btn = document.createElement('button');
//   btn.classList.add('colored')
//   body.append(btn);
//   const randomColor  = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
//   btn.textContent = "SOME COLOR";
//   btn.style.background = randomColor;
//   btn.style.margin = '50px';
// }
// const buttonsList = document.querySelectorAll('.colored');
// const btn1 = buttonsList[0];
// const btn2 = buttonsList[1];
// const btn3 = buttonsList[2];
// btn1.addEventListener('click', (e)=> body.style.background =  e.target.style.background);
// btn2.addEventListener('click', (e)=> body.style.background =  e.target.style.background);
//btn3.addEventListener('click', (e)=> body.style.background =  e.target.style.background);


// for(let i = 0; i<10; i++) {
//   const cube = document.createElement('div');
//   cube.classList.add('cube');
//   cube.textContent = i;
//   bady.append(cube);

  // cube.addEventListener('click', ()=> {
  //   alert(cube.textContent)
  // })
// }

// body.addEventListener('click', (e)=> {
//   alert(e.target.textContent);
// })


// const changeColor = (e) => {
//   let randomColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
//   body.style.background = randomColor;
//   console.log(e);
// }
// btn.addEventListener('click', changeColor);
// body.addEventListener('keydoun', (e) => {
//   console.log(e);
// })
// window.addEventListener('scroll', (e) => {
//   // window.scroll > 200 && window.scrollY < 210 ? console.log('STOP') : '';

//   window.scroll > 200 && window.scroll < 230
//     ? (body.style.background = 'orange')
//     : window.scrollY > 300 && window.scrollY < 330
//     ? (body.style.background = 'blue')
//     : window.scrollY > 400 && window.scrollY < 430
//     ? (body.style.background = 'red')
//     : '';
// })

// const body = document.querySelector('body');
// body.addEvenListener('click', (e) => {
//   console.log(e);
//   body.interHTML += `<div class=circle style=top:${e.clientyY}px; left:${e.clientX}px></div>`
// })

 // JavaScript

 // BOM, browser object model
 // Navigator

 // DOM,

 // API


// console.log(document)

// let vova = {
//     name: 'Vova',
//     age: 30
// }

// console.log(vova.name)

// vova.name = 'Sara';
// console.log(vova.name)


// document.querySelector('p')
// document.querySelectorAll('.my-class')

{/* <h1 class="title" id="heading">Heading</h1> */ }
// let h1 = document.querySelector('h1')
// h1 = document.querySelector('#heading')
// h1 = document.querySelector('.title');
// console.log(h1)


{/* <p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */}


// let p = document.querySelector('p');
// p = document.querySelector('.text');
// console.log(p)

{/* <ul class="list">
    <li class="list__item">Item_1</li>
    <li class="list__item">Item_2</li>
    <li class="list__item">Item_3</li>
    <li class="list__item">Item_4</li>
</ul> */}
{/* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */}


// let ul = document.querySelectorAll('ul');
// let li = ul[0].querySelectorAll('li');
// console.log(ul[0])
// console.log(li)
// // console.log(ul[1])

{/* <p class="text">
Lorem ipsum dolor sit <span>box</span> amet consectetur adipisicing
elit. Ratione ex ab, nulla nemo molestiae incidunt placeat quo
mollitia illo rerum cupiditate magni. Totam explicabo quas illum,
soluta cumque mollitia non!
</p>
<p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */}


// let p = document.querySelectorAll('p')[1].style.background = 'green';
// let p = document.querySelectorAll('p');
// p[1].style.background = 'blue';
// console.log(p);


// let heading = document.getElementById('heading');
// let paragraph = document.getElementsByClassName('text');  // HTML Collection
// let p = document.querySelectorAll('p'); // NodeLIst

// Array.from(paragraph).forEach((elem) => {
//     console.log(elem)

// }
// )


// let html = [...paragraph];
// html.forEach((elem) => {
//     console.log(elem)

// }
// )

// p.forEach((elem) => {
//     console.log(elem)

// })

// console.log(paragraph);
// console.log(p)



// Traversing dom


{/* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */}


// let list = document.querySelectorAll('ul');
// console.log(list[1]);


// Manipulating elements

// font-size: 30px;
// fontSize: 30

// 1. Style
// document.body.style.background = 'blue';
// document.querySelector('.text').style.background = 'green'
// document.querySelector('.text').style.fontSize = '26px'

// 2. Classes
// let list = document.querySelectorAll('ul');
// // list[1].className
// list[1].classList.add('js-hook-list')
// list[1].classList.remove('js-hook-list')
// console.log(list[1]);

// 3. setAttribute, remoweAttibute
{/* <ul class="list" id="my-list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */}

// let list = document.querySelectorAll('ul');
// // list[1].setAttribute('id', 'js-my-list');
// // list[1].removeAttribute('id');
// // list[1].id = 'new-way';

// let img = document.querySelector('img');
// // img.alt = 'cat'
// // img.width = '250';

// img.setAttribute('alt', 'dog');
// img.removeAttribute('alt');
// img.id = 'sdVfadrfgrgRgrdgdrh'
// console.log(img)

// let h2 = document.querySelector('h2');
// // h2.innerText = 'Vova';
// // h2.innerHTML = '<span>COPY</span>';

// console.log(h2.innerText);


// 4. Creating elements

// let catImg = document.createElement('img');
// // let body = document.querySelector('body');
// let list = document.querySelectorAll('ul');

// catImg.setAttribute('src', 'https://loremflickr.com/640/360');
// catImg.setAttribute('alt', 'cat-image');
// catImg.getAttribute('alt');


 // catImg.src = ''
 // catImg.alt = ''
 // body.appendChild(catImg);
 // list[1].append(catImg);
 // list[1].prepend(catImg);
 // list[1].after(catImg);
 // list[1].before(catImg);

// Events
// let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     // console.log('Click')
//     console.log(event.target);
//     // console.log(event.type);
//     // console.log(event);
//     console.log(this)
// })

// btn.addEventListener('focus', function (event) {
//     // console.log('Click')
//     // console.log(event.target);
//     console.log(event);
//     // console.log(event.type);
//     // console.log(event);
//     // console.log(this)
// })


// window.addEventListener('load', (e) => {
//     console.log(e);
// }
// );

// window.addEventListener('resize', (event) => {
//     console.log(event.target);
// }
// )

// let a = document.querySelector('a').addEventListener('click', (event) => {
//     console.log('click')
//     // event.preventDefault();

// }
// )

// let form = document.querySelector('form');
// console.log(form);
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   console.log(e.target[0].value);
//   console.log(e.target[1].value);
// })

// const input = document.querySelector('input');
// input.focus();
// input.addEventListener('focus', () => {
//   console.log('UNPUT IN FOCUS');
// })

// input.addEventListener('blur', () => {
//   console.log('INPUT HAS BLUR');
// })

// input.addEventListener('input', (e) => {
//   console.log(e.target.value);
// })

// input.addEventListener('change', (e) => {
//   console.log(e.target.value);
// })

// const body = document.querySelector('body');

// body.addEventListener('keypress', (e) => {
//   console.log(e.key);
// })

// const card = document.querySelector('.card');

// const cardCange = (e) => {

// e.preventDefault();

//   e.target.nodeName === 'IMG'
//   ? e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HkMKkz_ha_cMif5GXG0tk7wHreAaatxYDA&usqp=CAU'
//     : e.target.nodeName === 'LI'
//     ? (e.target.style.background = 'black')
//     : e.target.nodeName === 'H2'
//     ? (e.target.textContent = 'Bay-Bay')
//     : '';
// console.log(e.target.nodeName);
// }
// card.addEventListener('click', cardCange)

