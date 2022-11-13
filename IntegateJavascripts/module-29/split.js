const song = 'amar sonar bangla';
const words = song.split('on');

// slice
const smallSlice = song.slice(1, 3);

// substr
const smallSubstr = song.substr(5, 5);

// substr
const smallSubString = song.substring(5, 6);

// concat
const firstS = 'amader';
const secondS = 'sonar';

// const fullS = firstS + secondS;
const fullS = firstS.concat(secondS).concat('a');

// join
const abcWords = ['a', 'b', 'c'];
const fullWords = abcWords.join(' x ');

console.log(fullWords);