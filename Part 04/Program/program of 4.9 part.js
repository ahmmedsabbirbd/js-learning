/// Program of 4.9 part .....
console.log("Program of 4.9 part");

/// Student GPA
var gpa = 5.5;
var name = "Sokal Ahmmed";
var result;

if (2.49 >= gpa) {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . And you failed..Trying next time.";
} else if (2.50 >= gpa) {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . You are very bad student.";
} else if (3.50 >= gpa) {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . You are  bad student.";
} else if (4.00 >= gpa) {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . You are good student.";
} else if (4.00 <= gpa && 6.00 >= gpa) {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . You are very good student. You are genish.";
} else {
	result = "Your name is " + name + ". Your GPA : " + gpa + " . You are student of school area. Sala.";
}

console.log(result);