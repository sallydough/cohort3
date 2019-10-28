
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

};

//Canadian Dictionary



export default functions;
