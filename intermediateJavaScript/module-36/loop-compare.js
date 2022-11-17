const students = {
    id: 23,
    name: 'sabbir',
    age: 20,
    many: 2000,
    subjects: [
        'Enlish',
        'Bangla',
        'Math'
    ],
    bestFriends: {
        name: 'Rahul',
        major: 'Math'
    }
};

/* 
    for(let i=0; i > 10; i++) {}
    for(const num of numbers) {} array
    for(const prop in students) {} objects
*/

for(const student in students) {
    // console.log(student, ':', students[student]);
}

const studentsKey = Object.keys(students);
for(const student of studentsKey){
    // console.log(student, ':', students[student]);
}

// Advance
// console.log(Object.entries(students));

for(const [key, value] of Object.entries(students)) {
    console.log(key, value)
}
