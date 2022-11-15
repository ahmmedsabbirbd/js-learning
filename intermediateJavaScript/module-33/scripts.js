const students = {
    name: "Sabbir Ahmmed",
    age: 20,
    favarateActor: {
        color: 'golapi',
        movie: 'xx'
    },
    bolian: true
};

const studentsStringify = JSON.stringify(students);
const studentsParse = JSON.parse(studentsStringify);

console.log(students);
console.log(studentsStringify);
console.log(studentsParse);