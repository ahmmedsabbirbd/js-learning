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
    },
    takeExam: function() {
        console.log(this.name, 'is examer');
    },
    treateDe: function(expensive) {
        return this.many - expensive;
    }
};

students.takeExam();
const reamingMony = students.treateDe(10);

console.log(reamingMony);