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
          provinceAnswer= canadianProvinces.nl;
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
export {canadianProvinces};