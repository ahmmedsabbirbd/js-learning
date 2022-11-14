const numbers = [3, 4, 1, 3, 5, 6, 7];

// sort
const sortNumbers = numbers.sort();

// sort
const friends = ['sabbir', 'oishi', 'mamun', 'alim'];
// const sortFriends = friends.sort();
const reversFriends = friends.reverse();


const funFuNmbers = [12, 42, 11, 32, 9, 23, 52];
const sortFunNumber = funFuNmbers.sort(function(a, b){
    return a - b;
});
console.log(sortFunNumber)