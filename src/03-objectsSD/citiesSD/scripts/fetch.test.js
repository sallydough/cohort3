import functions from "./fetch.js/index.js.js"

const data = [
    {"name":"Isabella","surname":"Levy","gender":"female","region":"New Zealand"},
    {"name":"Major","surname":"Krisztina","gender":"female","region":"Hungary"},
    {"name":"Ashley","surname":"Gonzales","gender":"female","region":"United States"},
    {"name":"Ηρακλείδης","surname":"Λιάπης","gender":"male","region":"Greece"},
    {"name":"Εφιάλτης","surname":"Βονόρτας","gender":"male","region":"Greece"},
    {"name":"Emilia","surname":"Șerbănescu","gender":"female","region":"Romania"},
    {"name":"Dezider","surname":"Repiský","gender":"male","region":"Slovakia"},
    {"name":"Bikram","surname":"Acharya","gender":"male","region":"Nepal"},
    {"name":"Μέντωρ","surname":"Ακρίδας","gender":"male","region":"Greece"},
    {"name":"Patricia","surname":"Teleanu","gender":"female","region":"Romania"}
];

test ("firstName", () => { 
    expect(functions.getFirstName(data)).toBe("Isabella");
})

test ("allFirstName", () => { 
    //map,sort,filter,reducer(),every() & some();
    expect(functions.getAllFirstNames(data)).toBe(["Isabella", "Major", "Ashley", "Ηρακλείδης", "Εφιάλτης", "Emilia", "Dezider", "Bikram", "Μέντωρ", "Patricia"]);
})