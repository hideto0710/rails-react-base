import Animal from './Animal.js.es6';

class Cat extends Animal {

  sayName() {
    return `${this.name} (Cat)`;
  }

}

export default Cat;
