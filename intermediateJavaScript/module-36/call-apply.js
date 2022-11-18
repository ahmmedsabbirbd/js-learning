const sabbir = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2000,
    treateDe: function(expensive, bokshis) {
        return this.many - expensive - bokshis;
    }
};

const sokal = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2001
};

const sokil = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2002
};

// const sabbirReamingMony = sabbir.treateDe(10);
// const sokalReamingMony = sabbir.treateDe.bind(sokal);

const sokilReamingMony = sabbir.treateDe.call(sokil, 10, 2);
const sokilNextReamingMony = sabbir.treateDe.apply(sokil, [10, 2]);

console.log(sokilReamingMony, sokilNextReamingMony);