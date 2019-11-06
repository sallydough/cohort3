

const functions = {

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
    }

}

export default functions;