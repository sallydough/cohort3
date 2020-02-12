const functions = {

    getFirstName: (data) => {
    let firstName = data[0].name;
    return firstName;
    },

    getAllFirstNames: (data) => {
    return data.map(o => o.name);
    }
};

export default functions;

const me = 
{"name":"Kelly","surname":"Sally","gender":"whale","region":"New Zealand"}

