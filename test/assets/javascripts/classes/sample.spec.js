
import assert from 'power-assert';
import Cat from 'classes/Cat.js.es6';

describe('Cat', function(){
  beforeEach(function(){
    this.cat = new Cat('bob');
  });
  describe('#sayName()', function(){
    it('should return name with type', function(){
      assert(this.cat.sayName() === 'bob (Cat)');
    });
  });
});
