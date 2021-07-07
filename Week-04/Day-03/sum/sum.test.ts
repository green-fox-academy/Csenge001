import test from 'tape';
import { Sum } from './sum';


test ("sum function works with more integers", t => {
    const sum1 = new Sum([2, 4, 6]);
    const expected = 12;
  
    const actual = sum1.sum();
  
    t.equal(actual, expected);
    t.end();
})


test ("sum function works with only one integer", t => {
    const sum2 = new Sum([4]);
    const expected = 4;
  
    const actual = sum2.sum();
  
    t.equal(actual, expected);
    t.end();
})


test ("sum function works with a blank list", t => {
    const sum3 = new Sum([]);
    const expected = 0;
  
    const actual = sum3.sum();
  
    t.equal(actual, expected);
    t.end();
})


test ("sum function works with floating point numbers", t => {
    const sum4 = new Sum([0.5, 7.5]);
    const expected = 8;
  
    const actual = sum4.sum();
  
    t.equal(actual, expected);
    t.end();
})


test ("sum function works with negative numbers", t => {
    const sum5 = new Sum([-3, -10, -2]);
    const expected = -15;
  
    const actual = sum5.sum();
  
    t.equal(actual, expected);
    t.end();
})