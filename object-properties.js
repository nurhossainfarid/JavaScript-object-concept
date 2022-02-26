const bottle = {
    color: `yellow`,
    hold: `water`,
    price: 30,
    isCleaned: true,
}
// getting all properties name
const keys = Object.keys(bottle);
// console.log(keys);

// getting all properties value
const values = Object.values(bottle);
// console.log(values);
const pairs = Object.entries(bottle);
console.log(pairs);

// object.seal() [1. You can't delete properties 2. You can't add any properties 3. you can modify properties value]
Object.seal(bottle);

// object.freeze() [1. You can't delete properties 2. You can't add any properties 3. you can't modify properties value]
Object.freeze(bottle);

// modify properties
bottle.price = 100;

// delete object properties
delete bottle.isCleaned;
console.log(bottle);