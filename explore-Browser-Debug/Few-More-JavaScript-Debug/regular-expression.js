const myPassword = 'TokeBolboNa';

const exprestion1 = /[0-9]/.test(myPassword);
const exprestion2 = /[A-Z]/.test(myPassword);

const towSpecal = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('RastarMati*$');

const strongPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test('12$abcAB');

console.log(exprestion1, exprestion2, towSpecal, strongPassword);