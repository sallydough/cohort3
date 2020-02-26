class Node {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
        this.next = null;
        this.prev = null;

    }
show() {
    return `The ID number is ${this.id} & subject is ${this.subject}`
}
}
export default Node;