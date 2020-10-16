const score = document.querySelector('.score');
const startBtn = document.querySelector('.startBtn');
const gameArea = document.querySelector('.gameArea');
const gameMessage = document.querySelector('.gameMessage');
const player = {
  x: 0,
  y: 0,
  speed: 5,
  score: 0,
  inplay: false,
};
const pipe = {
  startPos: 0,
  spaceBetweenRow: 0,
  spaceBetweenCol: 0,
  pipeCount: 0,
};
let keys = {};

function isCollide(pipe, bird) {
  const pipeRect = pipe.getBoundingClientRect();
  const birdRect = bird.getBoundingClientRect();
  return (
    pipeRect.bottom > birdRect.top &&
    pipeRect.top < birdRect.bottom &&
    pipeRect.left < birdRect.right &&
    pipeRect.right > birdRect.left
  );
}

function makePipe(pipePos) {
  const totalHeight = gameArea.offsetHeight;
  const totalWidth = gameArea.offsetWidth;
  const pipeUp = document.createElement('div');
  const pipeDown = document.createElement('div');
  pipeUp.classList.add('pipe');
  pipeUp.height = Math.floor(Math.random() * 350);
  pipeUp.style.height = `${pipeUp.height}px`;
  pipeUp.style.left = totalWidth + pipePos + 'px';
  pipeUp.x = totalWidth + pipePos;
  pipeUp.style.top = '0px';
  pipeUp.style.backgroundColor = 'red';
  gameArea.appendChild(pipeUp);
  pipe.spaceBetweenCol = Math.floor(Math.random() * 250 + 150);
  pipeDown.classList.add('pipe');
  pipeDown.style.height = totalHeight - pipeUp.height - pipe.spaceBetweenCol + 'px';
  pipeDown.style.left = totalWidth + pipePos + 'px';
  pipeDown.x = totalWidth + pipePos;
  pipeDown.style.bottom = '0px';
  pipeDown.style.backgroundColor = 'black';
  gameArea.appendChild(pipeDown);
}

function movePipes(bird) {
  const pipes = document.querySelectorAll('.pipe');
  let counter = 0;
  pipes.forEach(item => {
    item.x -= player.speed;
    item.style.left = item.x + 'px';
    if(item.x < 0) {
      item.parentElement.removeChild(item);
      counter++;
    } 
    if(isCollide(item, bird)) {
      playGameOver(bird);
    }
  });
  for(let i = 0; i < counter / 2; i++) {
    makePipe(0);
  }
}

function playGameOver(bird) {
  player.inplay = false;
  bird.setAttribute('style', 'transform: rotate(180deg)');
  gameMessage.innerHTML = `GAME OVER <br>
  당신의 점수는 ${player.score}점 입니다. <br>
  다시 시작하려면 여기를 누르세요.`;
  gameMessage.classList.remove('hide');
}

function playGame() {
  if(player.inplay) {
    const bird = document.querySelector('.bird');
    const wing = document.querySelector('.wing');
    movePipes(bird);
    let move = false;
    if(keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
      move = true;
    } 
    if(keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth) {
      player.x += player.speed;
      move = true;
    } 
    if((keys.ArrowUp || keys.Space) && player.y > 0) {
      player.y -= player.speed * 3;
      move = true;
    }
    if(keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight) {
      player.y += player.speed;
      move = true;
    }
    if(move) {
      wing.pos = wing.pos === 15 ? 25 : 15;
      wing.style.top = `${wing.pos}px`;
    }
    player.y += player.speed * 2;
    bird.style.left = `${player.x}px`;
    bird.style.top = `${player.y}px`;
    player.score++;
    score.textContent = `SCORE : ${player.score}`;
    if(player.y > gameArea.offsetHeight) {
      playGameOver(bird);
    }
    window.requestAnimationFrame(playGame);
  }
}

function pressOn(e) {
  keys[e.code] = true;
  console.log(keys);
}

function pressOff(e) {
  keys[e.code] = false;
  console.log(keys);
}

function start() {
  console.log('game start');
  const bird = document.createElement('div');
  const wing = document.createElement('div');
  player.inplay = true;
  player.score = 0;
  gameArea.innerHTML = '';
  gameMessage.classList.add('hide');
  startBtn.classList.add('hide');
  bird.setAttribute('class', 'bird');
  wing.setAttribute('class', 'wing');
  wing.pos = 15;
  wing.style.top = `${wing.pos}px`;
  bird.appendChild(wing);
  gameArea.append(bird);
  player['x'] = bird.offsetLeft;
  player['y'] = bird.offsetTop;
  pipe.startPos = 0;
  pipe.spaceBetweenRow = 400;
  pipe.pipeCount = Math.floor(gameArea.offsetWidth / pipe.spaceBetweenRow);
  //let { startPos, spaceBetweenRow, pipeCount } = pipe;
  for(let i = 0; i < pipe.pipeCount; i++) {
    makePipe(pipe.startPos * pipe.spaceBetweenRow);
    pipe.startPos++;
  }
  window.requestAnimationFrame(playGame);
}

document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);
startBtn.addEventListener('click', start);
gameMessage.addEventListener('click', start);