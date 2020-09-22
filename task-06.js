//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество,
//то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const valInput = document.querySelector('#validation-input');
const pClass = document.createElement('p');
const createAllert = (el, className, msg) => {
  el.classList.add(className)
  el.textContent = msg;
  valInput.after(el);
}
const removeAlert = (el, className) => {
  el.classList.remove(className);
  el.textContent = '';
}
// createAllert(pClass, 'valid', 'Запонено неверно!!!');
console.log(pClass);
// console.dir(valInput);
let length = Number(valInput.dataset.length);
// console.log(length);
// valInput.classList.add('invalid');
valInput.addEventListener('blur', () => {
  // console.log(valInput.value);
  let textLength = valInput.value.length;
  // console.log(typeof length,length, typeof textLength, textLength);
  // console.log(length === textLength);
  // console.log(length == textLength);
  if(length === textLength){
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
    removeAlert(pClass, 'js-msg-invalid');
    createAllert(pClass, 'js-msg-valid', 'Заполнено верно!!!');
  } else {
    valInput.classList.add('invalid')
    valInput.classList.remove('valid')
    removeAlert(pClass, 'js-msg-valid')
    createAllert(pClass, 'js-msg-invalid', 'Заполнено неверно!!!');
  }
})
