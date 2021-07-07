import test from 'tape';
import {Apple} from './apples';


test ("getApple returns the given string", t => {
    const instance = new Apple();
    const expected = "apple";
  
    const actual = instance.getApple();
  
    t.equal(actual, expected);
    t.end();
  })