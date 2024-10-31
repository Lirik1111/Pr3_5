export function random(num) {
    return Math.ceil(Math.random() * num);
  }
  
  export function createClickLimit(limit) {
    let clickcount = 0;
    return function() {
      if (clickcount < limit) {
        clickcount++;
        console.log(`Кількість кліків - ${clickcount}`);
        return true;
      } else {
        console.log(`Кнопку можна натиснути лише ${limit} разів`);
        return false;
      }
    };
  }
  
  