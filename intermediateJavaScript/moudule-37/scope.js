const patriCai = (age, earing) => {
    // console.log(trueAge);
    console.log(age, earing);
    console.log(canMary(10000));

    var trueAge = age + 7;
    
    function canMary (expense) {
        const remaing = earing - expense;
        
        if(remaing > 1000) {
            return true;
        }

        return false;
    }

}

patriCai(20, 20000);