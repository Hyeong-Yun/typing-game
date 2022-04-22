const container = document.querySelector('.container');
const popup = document.querySelector('.popup-container');
const reset_btn = document.getElementById('reset-btn');

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

  const gameResult = {
    time: 10,
    score: 0,
    plusTime: 0
  }

let selectedWord = words[Math.floor(Math.random() * words.length)]

let template = `
<p class="word" id = 'word'>${selectedWord}</p>

<input id = "hello" type="text" placeholder ="write down the word..."/>

<div class="showing-game">
    <div class="time-left-container">
    <span>time left : </span>
        <span id = "time-left" style = "color: red">${gameResult.time}</span>
    </div>

    <div class="score-container">
    <span>score : </span>
        <span id = "score">${gameResult.score}</span>
    </div>
</div>
`;

let initTemplate = `
<h1 id = "title">Choose one difficulty</h1>
    
<div class="wrapper">
<button class = "btn" id = "easy-btn">
    <span>Easy</span>
</button class = "btn">

<button class = "btn" id = "midium-btn">
    <span>Midium</span>
</button>

<button  class = "btn" id = "hard-btn">
    <span>Hard</span>
</button>
</div>
`;

function makeWord(){
    selectedWord = words[Math.floor(Math.random() * words.length)]
    const word = document.getElementById('word');
    word.innerHTML = selectedWord;
}

function updateResult(){
    gameResult.score++;
    gameResult.time += gameResult.plusTime;

    const time_left = document.getElementById('time-left');
    const score = document.getElementById('score');

    time_left.innerHTML =gameResult.time;
    score.innerHTML = gameResult.score;
}

function inputImplement(){
    const input = document.getElementById('hello');
    input.addEventListener('input', e =>{
        const letter = e.target.value;

        if(letter === selectedWord){
            updateResult();
            makeWord();
            input.value = '';
        }
    })
}

function showdisplay(){
    container.innerHTML = template;
   
    function timeMinus(){
        gameResult.time -= 1;
        const timeLeft = document.getElementById('time-left')
        timeLeft.innerHTML = gameResult.time;
     
        if(gameResult.time === 0){
            clearInterval(timer); 
            popup.style.display = 'flex';
         }
    }

    const timer = setInterval(timeMinus, 1000);
    makeWord();
    inputImplement();
}

function initValues(){
    container.innerHTML = initTemplate;
    popup.style.display = 'none';

    gameResult.time = 10;
    gameResult.score = 0;
    gameResult.plusTime = 0;
}

//게임 초기화
reset_btn.addEventListener('click', (e)=>{
    initValues();
    pushTheButtons();
})



function pushTheButtons(){
    const gameBtn = document.querySelectorAll('.btn')

    //button 실행
    gameBtn[0].addEventListener('click', () =>{  // Easy Button
     gameResult.plusTime = 5;
     showdisplay();
    })

    gameBtn[1].addEventListener('click', () =>{ // Mediun Button
     gameResult.plusTime = 3;
     showdisplay();
    })

    gameBtn[2].addEventListener('click', () =>{ // Hard Button
      gameResult.plusTime = 2;
      showdisplay();
    })
}

pushTheButtons();