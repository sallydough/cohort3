import {Person, functions} from './oostuff.js'
import { exportAllDeclaration } from '@babel/types';
// import * as oo from './oostuff.js'

test("hello world", () => {
    console.log("hello from test");
    functions.helloooStuff();
    // oo.functions.helloooStuff();
});


test("class method", () => {
    const l = new Person("Larry", 5);
    const x = l;
    expect(l.getName()).toEqual("Larry");
    expect(l.getAge()).toEqual(5);
    console.log(l);
    l.upBirthday();
    expect(l.getAge()).toEqual(6);



    const dean = new Person("Dean", 29);
    expect(dean.getName()).toEqual("Dean");
    expect(dean.getAge()).toEqual(29);
    dean.upBirthday();
    expect(dean.getAge()).toEqual(30);

});