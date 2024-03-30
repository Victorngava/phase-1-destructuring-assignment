// Destructuring assignment for arrays
const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [medium, small, giant] = dogs;
console.log(medium, small, giant); // Output: Great Pyrenees Pug Bull Mastiff

const colors = ['red', 'blue', 'green'];
const [primary, secondary, tertiary] = colors;
console.log(primary, secondary, tertiary); // Output: red blue green

// Destructuring assignment for objects
const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats:{
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses:{
      american: 'kraft'
    }
  }
};

const { name, breed } = doggie;
console.log(name, breed); // Output: Buzz Great Pyrenees

const { ham, hotDog } = doggie.favoriteFoods.meats;
console.log(ham, hotDog); // Output: smoked Oscar Meyer

// Destructuring assignment for strings with split method
const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName); // Output: Sir Woody BarksALot