const names = ['sabbir', 'shakil', 'josim', 'sabbir'];
const numbers = [1, 3, 545, 1, 42, 5, 6, 5, 6];

function duplicateArray(names) {
    let duplicateName = [];

    for(const element of names) {

        if (duplicateName.indexOf(element) == -1 ) {
            duplicateName.push(element);
        }
    }
    
    return duplicateName;
}

console.log(duplicateArray(numbers));