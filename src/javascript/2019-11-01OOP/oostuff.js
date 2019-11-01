const functions = {

    helloooStuff: () => {
        console.log("hello from oostuff.js");
    },
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() { return this.name; }
    getAge() { return this.age; }
    upBirthday() { this.age++; }
    // method2() { ... }


}

export { Person, functions };