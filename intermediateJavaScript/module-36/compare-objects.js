const first = {a: 1, b: 2};
const second = {a: 1, b: 2};

if(JSON.stringify(first) === JSON.stringify(second)) {
    console.log('Thera are same');
}

const three = {a: 1, b: 2};
const four = {b: 2, a: 1g};

function compareObjects(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for(const prop in obj1) {
        if(obj1[prop] !== obj2[prop]) {
            return false;
        }
    }

    return true;
}

console.log(compareObjects(three, four))