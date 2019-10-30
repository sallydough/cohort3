
const functions = {
    //size  
    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },


    //Calculator
    add: (num1, num2) => {
        return num1 + num2;
    },

    sum: (par1, par2) => {
        return par1 + par2;
    },

    subtract: (par1, par2) => {
        return par1 - par2;
    },

    multiply: (par1, par2) => {
        return par1 * par2;
    },

    divide: (par1, par2) => {
        return par1 / par2;
    },


    //Canadian Taxes

    helloTaxWorld: (income) => {
        let tax = income * 0.15;
        return Number(tax);
        if(income <= 47630)
        //     let tax15 = 0.15 * income
        //     let remainder = 0; 
        //     if (income > 47256 && income < 96256) {
        //         remainder = income - 47256;
        //         let tax20 = remainder * 0.20;
        //         let resultTax = tax15 + tax20;
        //         return resultTax;
        //     }
        // },

        // const bracketA = 47630;
        // const bracketB = 95259;
        // const bracketC = 147667;
        // const bracketD = 210371;

        // const rateA = 0.15;
        // const rateB = 0.205;
        // const rateC = 0.26;
        // const rateD = 0.29;
        // const rateE = 0.33;

    
        // let taxSum = 0;
        // if (income > bracketA) {
        //     taxSum = taxSum + ((income - bracketA) * rateB);
        //  } else { taxSum = income * rateA;
        // }
        // if (income> bracketB) {
        //     taxSum = taxSum + ((income - bracketB) * rateC)
        // }
        // if (income > bracketC) {
        //     taxSum = taxSum + ((income - bracketC) * rateD)
        // }
        // if (income > bracketD) {
        //     taxSum = taxSum + ((income - bracketD) * rateE)
        // } return taxSum.toFixed(2);
    },






}









export default functions;
