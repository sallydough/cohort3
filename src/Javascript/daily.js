
const functions = {

assertEquals: (a,b) => {
    if(a === b) {
        return true;
    } else if (a !== b) {
        console.log(a , b);
        return false;
    }
},

makeEmailArr: (names) => {
    let arrayNames = names;
    const firstName = arrayNames[0].toLowerCase();
    const lastName = arrayNames[1].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstName+"."+lastName+atEvolveU;
},

makeEmailObj: (objName) => {
    let objectNames = objNames;
    const firstObjName = objectNames[0].toLowerCase();
    const lastObjName = objectNames[1].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstObj+"."+lastObj+atEvolveU;
},


}

export default functions;
//[1]. write test
//[2]. to export: write 'export' in front of function
//
 //     export functionName (a,b) {
//          console.log("helloworld");
 //     }

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/


// Write the function after this comment ---
