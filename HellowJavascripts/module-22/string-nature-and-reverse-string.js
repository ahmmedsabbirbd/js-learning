const text = 'sabbir';

function reversString (text) {
  let reverse = '';
  for(const letter of text) {
    reverse = letter + reverse;
  }
  console.log(reverse);
}

reversString(text);