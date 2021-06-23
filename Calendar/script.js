// var calendar_Days = 30;
// var starting_Days = 4;
// var rows = "";
// var mounth;

// console.log("Calendar of November");
// console.log("Sun    Mon    Tue    Wed    Tru    Fri    Sat")
// for (var i=0; i<5; i++) {
// 	for (var j=1; j<=7; j++) {
// 		mounth =7*i+j-starting_Days;

// 		if(mounth>calendar_Days) {
// 			break;
// 		}else if (mounth<1) {
// 			mounth="*";
// 		}
// 		if (9<mounth) {
// 			rows += mounth +"     ";
// 		} else {
// 			rows += mounth +"      ";
// 		}
// 	}
// 	rows += "\n";

// }
// console.log(rows);

function calendar (month_Name="November",total_days=30, starting_Day=0) {
	var rows = "";
	var mounth;
	var c ="Calendar of "+ month_Name;
	var d ="Sun    Mon    Tue    Wed    Tru    Fri    Sat"
	for (var i=0; i<5; i++) {
		for (var j=1; j<=7; j++) {
			mounth =7*i+j-starting_Day;
			if(mounth>total_days) {
				break;
			}else if (mounth<1) {
				mounth="*";
			}
			if (9<mounth) {
				rows += mounth +"      ";
			} else {
				rows += mounth +"        ";
			}
		}
		rows += "\n";
	}
	alert(c+"\n"+d+"\n"+rows);
}