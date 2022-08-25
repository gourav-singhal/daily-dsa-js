/**
1. constructor function for stack
- push -> add a new element
- pop ->remove an element 
- peek -> get first element
- size -> current size of stack
*/

function Stack() {
    this.count = 0;
    this.storage = {};
    
    this.push = function (data) {
        this.storage[this.count] = data;
        this.count++;
    }
    
    this.pop = function () {
        if (this.count == 0) return undefined;
        this.count--;
        const res = this.storage[this.count];
        delete this.storage[this.count];
        return res;
    }
    
    this.size = function () {
        return this.count;
    }
    
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}


const s = new Stack();
s.push(1);
s.push(2);
console.log(s.size(), s.peek(), s.pop(), s.peek());
