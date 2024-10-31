export default class Pokemon {
    constructor(name, defaultHP, elHP, elProgressbar) {
      this.name = name;
      this.defaultHP = defaultHP;
      this.damageHP = defaultHP;
      this.elHP = elHP;
      this.elProgressbar = elProgressbar;
    }
  
    renderHPLife() {
      this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
    }
  
    renderProgressbarHP() {
      const healthPercentage = (this.damageHP / this.defaultHP) * 100;
      this.elProgressbar.style.width = `${healthPercentage}%`;
  
      if (healthPercentage > 50) {
        this.elProgressbar.style.backgroundColor = 'green';
      } else if (healthPercentage > 20) {
        this.elProgressbar.style.backgroundColor = 'yellow';
      } else {
        this.elProgressbar.style.backgroundColor = 'red';
      }
    }
  
    changeHP(count, logCallback) {
      this.damageHP = Math.max(0, this.damageHP - count);
      logCallback(`${this.name} received ${count} damage, remaining HP: ${this.damageHP}/${this.defaultHP}`);
  
      if (this.damageHP === 0) {
        alert(`Poor ${this.name} has lost the battle!`);
      }
  
      this.renderHP();
    }
  
    renderHP() {
      this.renderHPLife();
      this.renderProgressbarHP();
    }
  }
  