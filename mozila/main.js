var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  var buttons = document.querySelectorAll('button'); //выбирает все кнопки
  
  for (var i = 0; i < buttons.length ; i++) {
    console.log(i);
    buttons[i].addEventListener('click', createParagraph);
  }

  // Функция: создает новый параграф и добавляет его вниз тела HTML.

function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  /*
    1. Получаем ссылки на все кнопки на странице и отсортировываем их в массиве.
    2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.
  
    При нажатии любой кнопки, будет выполняться функция createParagraph().
  */
  
  var buttons = document.querySelectorAll('button');
  
  for (var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
  
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var guesses = document.querySelector('.guesses');
  var lastResult = document.querySelector('.lastResult');
  var lowOrHi = document.querySelector('.lowOrHi');

  var guessSubmit = document.querySelector('.guessSubmit');
  var guessField = document.querySelector('.guessField');

  var guessCount = 1;
  var ressetButton; 

  guessField.focus();

  function checkGuess(){
      var userGuess = Number(guessField.value);
      if(guessCount === 1){
          guesses.textContent = 'Previous gusses';
      }
      guesses.textContent +=userGuess + '';
      if(userGuess === randomNumber){
          lastResult.textContent = "Cngratulations! You got it right";
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
      } else if(guessCount === 10){
          lastResult.textContent = 'Game Over';
          setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
      }
         if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();

  }

  guessSubmit.addEventListener("click" , checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start nev game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',  resetGame);
}

function resetGame(){
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length; i++ ){
        resetParas[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

var btn =document.querySelector(".button");
var txt =document.querySelector(".p");

btn.addEventListener("click", updateBtn);

function updateBtn (){
  if (btn.textContent === "Старт машина"){
    btn.textContent = "Стоп машина";
    txt.textContent = "Запустить машину"
  } else{
    btn.textContent = "Старт машина";
    txt.textContent = "Остановить машину"
  }
}

var button = document.getElementById("btn");

button.onclick = function(){
  var name = prompt("Wat is your name?");
  alert("Hello " + name + " nice to see you!")
}

//массивы
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
//myData.split(",") //символ разделяет строку ,переводит в массив
//myData.toString()//переводит в строку
// myData.push()//добовляет в конец массива
// myData.pop()//удаляет с конеца массива
// myData.unshift()//добавляет в начало массива

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
 var subArray = products[i].split(':');
 var name = subArray[0];
 var price = Number(subArray[1]);
 total += price;
 itemText = name + ' — $' + price;

 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
////////////////////////////////////////
var list = document.querySelector('.outputt ul');
var searchInput = document.querySelector('.outputt input');
var searchBtn = document.querySelector('.outputt button');

list.innerHTML = '';

var myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 list.innerHTML = '';

 for(var i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}
//////////////////////////////////////////////////////////
// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//2. RAW TEXT STRINGS

// It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and crawled away

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);

  }

 // story.textContent = ;
  story.style.visibility = 'visible';
}

////////////////////////////////////////////////////////////
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
  } else if (choice === 'rainy') {
    para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
  } else if (choice === 'snowing') {
    para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
  } else if (choice === 'overcast') {
    para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
  } else {
    para.textContent = '';
  }
}
///////////////////////////////////////////
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
  var days = 31;
  if(choice === 'February') {
    days = 28;
  } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
 for(var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
 }

createCalendar(31,'January');