const foodd= require('./food.json');

function listAll() {
    return foodd;
  }
  
  function listVegetable() {
    return foodd.filter((food) => food.category === 'Vegetable');
  }
  
  function listFruit() {
    return foodd.filter((food) => food.category === 'Fruit');
  }
  
  function listProtein() {
    return foodd.filter((food) => food.category === 'Protein');
  }
  
  function listNuts() {
    return foodd.filter((food) => food.category === 'Nuts');
  }

  function listGrains() {
    return foodd.filter((food) => food.category === 'Grain');
  }
  
  function listDairy() {
    return foodd.filter((food) => food.category === 'Dairy');
  }

  function listAboveCalorie(calorie) {
    return foodd.filter((food) => food.calorie > calorie);
  }

  function listBelowCalorie(calorie) {
    return foodd.filter((food) => food.calorie < calorie);
  }

  function listByProteinContent() {
    return foodd.sort((a, b) => b.protiens - a.protiens);
  }

  function listByCarbContent() {
    return foodd.sort((a, b) => a.cab - b.cab);
  }

console.log('Task 1 \n');
console.log(listAll());

console.log('\nTask 2 \n');
console.log(listVegetable());

console.log('\nTask 3 \n');
console.log(listFruit());

console.log('\nTask 4 \n');
console.log(listProtein());

console.log('\nTask 5 \n');
console.log(listNuts());

console.log('\nTask 6 \n');
console.log(listGrains());

console.log('\nTask 7 \n');
console.log(listDairy());

console.log('\nTask 8 \n');
console.log(listAboveCalorie(100));

console.log('\nTask 9 \n');
console.log(listBelowCalorie(100));

console.log('\nTask 10 \n');
console.log(listByProteinContent());

console.log('\nTask 11 \n');
console.log(listByCarbContent());
