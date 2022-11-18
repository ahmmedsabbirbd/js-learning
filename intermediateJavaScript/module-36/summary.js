const pen = {
    color: 'red',
    price: 10,
    writePoet: function(food){
        return food;
    }
};

const key = Object.keys(pen);
const value = Object.values(pen);

for(const key in pen){
    console.log(key,':', pen[key]);
}

const a = {a:1, b:2};
const b = {b:2, a:1};

for(const [key, value] of Object.entries(pen)) {
    console.log(key, value)
}

function objectCompare(a, b) {
    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }

    for(const key in a) {
        if(a[key] !== b[key]) {
            return false;
        }
    }

    return true;
}

console.log(objectCompare(a, b));

const abinded = pen.writePoet(a);

console.log(abinded);