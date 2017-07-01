console.log('module 1');

let encapsulatedVariable = "variable";

function sayHello(name = '') {
    console.log(`Hello ${name}`);
}

function getEncapsulatedVariable() {
    return encapsulatedVariable;
}

// expose functin sayHello
module.exports = {
    sayHello,
    getEncapsulatedVariable
};