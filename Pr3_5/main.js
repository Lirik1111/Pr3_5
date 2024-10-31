const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const $logs = document.querySelector('#logs');
let kick = 0;
$btn2.disabled = true;
const LimitClickCountbutton1 = CountLimitClick(6); 
const LimitClickCountbutton2 = CountLimitClick(6); 
function CountLimitClick (limit){
  let clickcount = 0
  return function(){
    if(clickcount < limit){
      clickcount++;
      console.log(`Кількість кліків - ${clickcount}` ) 
      return true ;

    }
    else{
      console.log(`Кнопку мона натиснути лише ${limit}`)
      return false ; 
    }
  }
}
const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),

  renderHPLife: function () {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
  },

  renderProgressbarHP: function () {
    const healthPercentage = (this.damageHP / this.defaultHP) * 100;
    this.elProgressbar.style.width = healthPercentage + '%';
  },

  changeHP: function (count) {
    const logMessage = genlog(this, enemy, count);
    addLog(logMessage);
    if (this.damageHP <= count) {
      this.damageHP = 0;
      alert('Бедный ' + this.name + ' проиграл бой!');
      $btn1.disabled = true;
      $btn2.disabled = true;
    } else {
      this.damageHP -= count;
    }
    if (kick % 3 === 0) {
      $btn2.disabled = false;
    } else {
      $btn2.disabled = true;
    }
    this.renderHP();
  },

  renderHP: function () {
    this.renderHPLife();
    this.renderProgressbarHP();
  }
};

const enemy = {
  name: 'Charmander',
  defaultHP: 180,
  damageHP: 180,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),

  renderHPLife: function () {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
  },

  renderProgressbarHP: function () {
    const healthPercentage = (this.damageHP / this.defaultHP) * 100;
    this.elProgressbar.style.width = healthPercentage + '%';
  },

  changeHP: function (count) {
    const logMessage = genlog(this, character, count);
    addLog(logMessage);
    if (this.damageHP <= count) {
      this.damageHP = 0;
      alert('Бедный ' + this.name + ' проиграл бой!');
      $btn1.disabled = true;
      $btn2.disabled = true;
    } else {
      this.damageHP -= count;
    }
    if (kick % 3 === 0) {
      $btn2.disabled = false;
    } else {
      $btn2.disabled = true;
    }
    this.renderHP();
  },

  renderHP: function () {
    this.renderHPLife();
    this.renderProgressbarHP();
  }
};
function genlog(firstPerson, secondPerson, damage) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
  ];
  return logs[random(logs.length) - 1];
}

function addLog(logMessage) {
  const $p = document.createElement('p');
  $p.innerText = logMessage;
  $logs.insertBefore($p, $logs.children[0]);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

$btn2.addEventListener('click', function () {
  if(LimitClickCountbutton2()){
    character.changeHP(random(70));
    enemy.changeHP(random(70));
    $btn2.disabled = true;
  }
});

$btn1.addEventListener('click', function () {
  if(LimitClickCountbutton1()){
    kick++;
  character.changeHP(random(20));
  enemy.changeHP(random(20));
  }
});

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

init();




