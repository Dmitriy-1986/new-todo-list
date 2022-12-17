'use script';

/* Метод HTMLFormElement.reset() восстанавливает 
стандартные значения всем элементам формы. 
Данный метод выполняет действие идентичное 
нажатию кнопки имеющей тип reset. */

const oneInput =  document.querySelector('#oneInput'),
      oneForm = document.querySelector('#oneForm'),
      result = document.querySelector('#result'),
      btnReset = document.querySelector('#btnReset');

oneForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newText = oneInput.value;
    if(newText) {
        result.innerHTML += '<li>' + newText + '</li>';
    } 
    e.target.reset()//Метод HTMLFormElement.reset()
});

btnReset.addEventListener('click', () => {
    result.innerHTML = '';
})


















