import functions from './functions.js'

idShowButton.addEventListener("click", () => {
    console.log("Province Search Button has been Clickitty Clacked");
    let clickedProvince = functions.findProvinceSearch(idSearchTextBox.value);
    idMessageArea.textContent = `Province: ${clickedProvince}`;
    console.log(selectedProvince);
    idSearchTextBox.value = "";
});