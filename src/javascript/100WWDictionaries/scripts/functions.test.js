import functions from "./functions.js";

// import functions from './functions.js'


test("working with dictionaries", () => {
    console.log("hello Working With Dictionary");
    functions.hiDictionaryWorld();
});

test("Searching Provinces in findProvinceSearch", () => {
    expect(functions.findProvinceSearch("ab")).toBe("Alberta");
    expect(functions.findProvinceSearch("bc")).toBe("British Columbia");
    expect(functions.findProvinceSearch("mb")).toBe("Manitoba");
    expect(functions.findProvinceSearch("nb")).toBe("New Brunswick");
    expect(functions.findProvinceSearch("nl")).toBe("Newfoundland and Labrador");
    expect(functions.findProvinceSearch("ns")).toBe("Nova Scotia");
    expect(functions.findProvinceSearch("nt")).toBe("Northwest Territories");
    expect(functions.findProvinceSearch("nu")).toBe("Nunavut");
    expect(functions.findProvinceSearch("on")).toBe("Ontario");
    expect(functions.findProvinceSearch("pe")).toBe("Prince Edward Island");
    expect(functions.findProvinceSearch("qc")).toBe("Quebec");
    expect(functions.findProvinceSearch("sk")).toBe("Saskatchewan");
    expect(functions.findProvinceSearch("yt")).toBe("Yukon");
    expect(functions.findProvinceSearch("ot")).toBe("Invalid Province Code");
  });