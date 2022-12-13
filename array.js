class Arr {
    constructor() {
        this.length = 0 
        console.log('Custom Array created.') 
        this.argumentsHandler.apply(this, arguments)
    }   
    push(item) {
        if (!item) return console.error(
            `SyntaxError: You shall input 
            an argument to call "Arr.push()" method.`)
        this[this.length] = item
        this.length++
        return this
    }
    get pop() {
        if (this.length == 0) return console.error(
            `TypeError: Arr already empty. Cannot run Arr.pop at ${this}`)
        const lastItem = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        console.log(this)
        return console.log(lastItem)
    }
    del(index = 0) {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.del method.')
        const item = this[index]
        this.shiftIndex(index)
        console.log(this)
        return item
    }
    get shift() {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.shift method.')
        const item = this[0]
        this.shiftIndex(0)
        console.log(this)
        return item
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this[i] = this[i + 1]
        }
        delete this[this.length - 1]
        this.length--
    }
    unshift(item) {
        this.unshiftIndex(0)
        this[0] = item
        console.log(this)
    }
    unshiftIndex(index) {
        for (let i = index; i <= this.length - 1; i++) {
            this[i + 1] = this[i]
        }
        this.length++
    }
    argumentsHandler() {
        for (const argument of arguments) this.push(argument)
        console.log(this)
    }
}

const arr = new Arr('Diego', 'Karten', 'Oscar')
arr.shift
arr.shift
arr.shift
arr.shift
console.log('________________________________________________________________')