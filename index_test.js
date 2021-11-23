const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () =>{
  describe('.announceDawn',() =>{
    it('returns a rooster call',() =>{
      //setup
      const expected = 'cock-a-doodle-doo!';

      //exercise
      const roost = Rooster.announceDawn();

      //Verify
      assert.equal(expected, roost);
    });
  });
  describe('.timeAtDawn',() =>{
    it('returns its argument as a string',()=>{
      //setup
      const inputHour = 10;
      const expectedHour = '10'; 

      //exercise
      const actual = Rooster.timeAtDawn(inputHour);
      //verify
      assert.equal(expectedHour, actual);
    });
    it('throws an error if passed a number less than 0',() =>{
      //Setup
      const inputHour = -1;
      const expected = RangeError;
     //Verify
      assert.throws(()=>{ Rooster.timeAtDawn(inputHour)}, expected);
    });
    
    it('throws an error if passed a number greater than 23', () =>{
       //Setup
      const inputHour = -1;
      const expected = RangeError;
      
      //verify
          assert.throws(()=>{ Rooster.timeAtDawn(inputHour)}, expected);
      });
    });
  });