const functions = {

    helloHalloween: () => {
        console.log("happer hallos");
    },

    CanadaFederalTax: (income) => {
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
        let tax=0;

        if (income <= 0) {
            return 0;
        } else if ((income > 0) && (income <= basketTopIncomeRange1)) {
            tax = income * basketTaxRate1;
            console.log("income tax in range 1 is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange1) && (income <= basketTopIncomeRange2)) {
            tax = basketSumTax1 + (income - basketTopIncomeRange1) * basketTaxRate2;
            console.log("income tax in range 2 is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange2) && (income <= basketTopIncomeRange3)) {
            tax = basketSumTax1 + basketSumTax2 + (income - basketTopIncomeRange2) * basketTaxRate3;
            console.log("income tax in range 3 is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange3) && (income <= basketTopIncomeRange4)) {
            tax = basketSumTax1 + basketSumTax2 + basketSumTax3 + (income - basketTopIncomeRange3) * basketTaxRate4;
            console.log("income tax in range 4 is: " + tax);
            return tax;
        } else if ((income > basketTopIncomeRange4)) {
            tax = basketSumTax1 + basketSumTax2 + basketSumTax3 + basketSumTax4 + (income - basketTopIncomeRange4) * basketTaxRate5;
            console.log("income tax in range 5 is: " + tax);
            return tax;
        }
    },

}





export default functions;