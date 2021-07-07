import test from "tape";
import {Sharpie} from "./sharpie"


test ("use function works when inkAmount is an integer above 10", t => {
    const sharpie1 = new Sharpie("green", 0.6, 20);
    const expected = 10;

    const actual = sharpie1.use();

    t.equal(actual, expected);
    t.end();
})


test ("use function works when inkAmount is an integer below 10", t => {
    const sharpie2 = new Sharpie("green", 0.6, 5);
    const expected = 0;

    const actual = sharpie2.use();

    t.equal(actual, expected);
    t.end();
})


test ("use function and default setting work when inkAmount is undefined", t => {
    const sharpie3 = new Sharpie("green", 0.6);
    const expected = 90;

    const actual = sharpie3.use();

    t.equal(actual, expected);
    t.end();
})