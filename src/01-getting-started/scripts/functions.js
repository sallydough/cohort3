
////////////////dicitonary//////////////////
const canadianProvinces = {
    ab: "Alberta",
    bc: "British Columbia",
    mb: "Manitoba",
    nb: "New Brunswick",
    nl: "Newfoundland and Labrador",
    ns: "Nova Scotia",
    nt: "Northwest Territories",
    nu: "Nunavut",
    on: "Ontario",
    pe: "Prince Edward Island",
    qc: "Quebec",
    sk: "Saskatchewan",
    yt: "Yukon"
};

let provinceIDCode = "";
let provinceAnswer = "";

const functions = {
    /////////////////////////size//////////////////////
    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },


    ///////////Calculator////////////
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

    ////////////////Canadian Taxes///////////////

    helloHalloween: () => {
        console.log("happer hallos");
    },

    CanadaFederalTax: (income) => {
        const basketTaxxRates = [ 0.15,       0.205,         0.26,          0.29,        0.33];
     // const topIncomeRanges = [47630, 95259-47630, 147667-95259, 210371-147667,    Infinity];
        const topIncomeRanges = [47630,       47629,        52408,         62704,    Infinity];

        let totalTaxPayable= 0;
        let currentBracket = 0;
        let remainsToBeTaxed = income;

        while (remainsToBeTaxed > 0) {
            let currentChunkToBeTaxed;

            if (remainsToBeTaxed > topIncomeRanges[currentBracket]) {
                currentChunkToBeTaxed = topIncomeRanges[currentBracket];
            } else {
                currentChunkToBeTaxed = remainsToBeTaxed;
            } 
            let currentChunkOfTax = currentChunkToBeTaxed * basketTaxxRates[currentBracket];
            remainsToBeTaxed = remainsToBeTaxed - currentChunkToBeTaxed;
            totalTaxPayable = totalTaxPayable + currentChunkOfTax;
            currentBracket = currentBracket + 1;
            
        }
        return totalTaxPayable;
    },

    oldCanadaFederalTax: (income) => {
        const basketTaxRate1 = 0.15;
        const basketTaxRate2 = 0.205;
        const basketTaxRate3 = 0.26;
        const basketTaxRate4 = 0.29;
        const basketTaxRate5 = 0.33;

        const basketTopIncomeRange1 = 47630;
        const basketTopIncomeRange2 = 95259;
        const basketTopIncomeRange3 = 147667;
        const basketTopIncomeRange4 = 210371;

        const basketSumTax1 = basketTopIncomeRange1 * basketTaxRate1;
        const basketSumTax2 = (basketTopIncomeRange2 - basketTopIncomeRange1) * basketTaxRate2;
        const basketSumTax3 = (basketTopIncomeRange3 - basketTopIncomeRange2) * basketTaxRate3;
        const basketSumTax4 = (basketTopIncomeRange4 - basketTopIncomeRange3) * basketTaxRate4;

        console.log("income is: " + income)
        let tax = 0;

        if (income <= 0) {
            return 0;
        } else if ((income > 0) && (income <= basketTopIncomeRange1)) {
            tax = income * basketTaxRate1;
            console.log("Range1 income tax is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange1) && (income <= basketTopIncomeRange2)) {
            tax = basketSumTax1 + (income - basketTopIncomeRange1) * basketTaxRate2;
            console.log("Range2 income tax is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange2) && (income <= basketTopIncomeRange3)) {
            tax = basketSumTax1 + basketSumTax2 + (income - basketTopIncomeRange2) * basketTaxRate3;
            console.log("Range3 income tax is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange3) && (income <= basketTopIncomeRange4)) {
            tax = basketSumTax1 + basketSumTax2 + basketSumTax3 + (income - basketTopIncomeRange3) * basketTaxRate4;
            console.log("Range4 income tax is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange4)) {
            tax = basketSumTax1 + basketSumTax2 + basketSumTax3 + basketSumTax4 + (income - basketTopIncomeRange4) * basketTaxRate5;
            console.log("Range5 income tax is " + tax);
            return tax;
        }
    },

    ///////////////////////Array////////////////////////////////
    hiArrayWorld: () => {
        console.log("hi");
    },
    add: (item) => {
        if (typeof item === "number" && isNaN(item) !== true) {
            return `${item} has been added to your array`;
        }
        return "The input is not a valid number";
    },
    show: (array) => {
        return array.join();
    },
    total: (array) => {
        return array.reduce((a, b) => a + b, 0);
    },
    clear: (array) => {
        array = [];
        return array;
    },
    ///////////////////dictionary///////////////////////
    hiDictionaryWorld: () => {
        console.log("dictionary");
    },

    findProvinceSearch: provinceIDTextBox => {
        provinceIDCode = provinceIDTextBox.toLowerCase();
        return canadianProvinces[provinceIDCode] || "Invalid Province Code"
    },

    oldfindProvinceSearch: provinceIDTextBox => {
        provinceIDCode = provinceIDTextBox.toLowerCase();
        switch (provinceIDCode) {
            case "ab":
                provinceAnswer = canadianProvinces.ab;
                return provinceAnswer;
            case "bc":
                provinceAnswer = canadianProvinces.bc;
                return provinceAnswer;
            case "mb":
                provinceAnswer = canadianProvinces.mb;
                return provinceAnswer;
            case "nb":
                provinceAnswer = canadianProvinces.nb;
                return provinceAnswer;
            case "nl":
                provinceAnswer = canadianProvinces.nl;
                return provinceAnswer;
            case "ns":
                provinceAnswer = canadianProvinces.ns;
                return provinceAnswer;
            case "nt":
                provinceAnswer = canadianProvinces.nt;
                return provinceAnswer;
            case "nu":
                provinceAnswer = canadianProvinces.nu;
                return provinceAnswer;
            case "on":
                provinceAnswer = canadianProvinces.on;
                return provinceAnswer;
            case "pe":
                provinceAnswer = canadianProvinces.pe;
                return provinceAnswer;
            case "qc":
                provinceAnswer = canadianProvinces.qc;
                return provinceAnswer;
            case "sk":
                provinceAnswer = canadianProvinces.sk;
                return provinceAnswer;
            case "yt":
                provinceAnswer = canadianProvinces.yt;
                return provinceAnswer;
            default:
                return "Invalid Province Code";
        }
    }
};
















export default functions;
