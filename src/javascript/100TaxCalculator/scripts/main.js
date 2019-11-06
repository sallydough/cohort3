import functions from './functions.js'

idCalcTax.addEventListener("click", () => {
    functions.helloHalloween();
    const taxFinalResult = functions.CanadaFederalTax(idIncomeValue.value);
    idTaxResult.value = taxFinalResult.toFixed(2);
});