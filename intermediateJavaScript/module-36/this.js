console.log(this);

const sabbir = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2000,
    treatdayArrow: ()=> {
        console.log(this);
    },
    treatdayInside: function() {
        const arrowFunction = ()=> console.log(this);
        arrowFunction();
    },
    treateDe: function(expensive) {
        return this.many - expensive;
    }
};

const add = () => {
    console.log(this);
}