const sabbir = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2000,
    treateDe: function(expensive) {
        return this.many - expensive;
    }
};

const sokal = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2001
};

const sabbirReamingMony = sabbir.treateDe(10);
const sokalReamingMony = sabbir.treateDe.bind(sokal);

console.log(sabbirReamingMony, sokalReamingMony(10));