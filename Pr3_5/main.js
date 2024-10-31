import Pokemon from './CreatePokemon.js';
import { genLog, addLog } from './logs.js';
import { random, createClickLimit } from './fun.js';
import { pokemons } from './pokemons.js';

const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const $logs = document.querySelector('#logs');
$btn2.disabled = true;

const character = new Pokemon('Pikachu', 100, document.getElementById('health-character'), document.getElementById('progressbar-character'));
let enemy = spawnNewEnemy();

let kickCount = 0;
const limitClickButton1 = createClickLimit(1000000);
const limitClickButton2 = createClickLimit(1000000);

$btn1.addEventListener('click', () => {
  if (limitClickButton1()) {
    kickCount++;
    character.changeHP(random(20), log => addLog(log, $logs));
    enemy.changeHP(random(20), log => addLog(log, $logs));
    
    if (kickCount % 3 === 0) $btn2.disabled = false;
    checkEnemyDefeated();
  }
});

$btn2.addEventListener('click', () => {
  if (limitClickButton2()) {
    character.changeHP(random(70), log => addLog(log, $logs));
    enemy.changeHP(random(70), log => addLog(log, $logs));
    $btn2.disabled = true;
    checkEnemyDefeated();
  }
});

function spawnNewEnemy() {
  const randomIndex = Math.floor(Math.random() * pokemons.length);
  const newEnemyData = pokemons.splice(randomIndex, 1)[0];

  const enemyHPElement = document.getElementById('health-enemy');
  const enemyProgressBar = document.getElementById('progressbar-enemy');
  enemyHPElement.innerText = `${newEnemyData.hp}/${newEnemyData.hp}`;
  enemyProgressBar.style.width = '100%';

  const newEnemy = new Pokemon(newEnemyData.name, newEnemyData.hp, enemyHPElement, enemyProgressBar);
  document.getElementById('enemy-img').src = newEnemyData.img;

  return newEnemy;
}

function checkEnemyDefeated() {
  if (enemy.damageHP === 0) {
    if (pokemons.length > 0) {
      alert(`You've defeated ${enemy.name}! A new challenger appears!`);
      enemy = spawnNewEnemy();
    } else {
      alert("Congratulations! You've defeated all opponents!");
      $btn1.disabled = true;
      $btn2.disabled = true;
    }
  }
}

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

init();







