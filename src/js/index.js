// This is input.js

function greet(name) {
    console.log("Hello, " + name + "!");
}

function welcomeMessage(name, age) {
    if (age < 18) {
        console.log("Hey " + name + ", you are still a minor!");
    } else {
        console.log("Welcome " + name + ", you are an adult!");
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const persons = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 16 }
];

persons.forEach(person => {
    greet(person.name);
    welcomeMessage(person.name, person.age);
    console.log(person.name + "'s factorial of age is: " + factorial(person.age));
});
