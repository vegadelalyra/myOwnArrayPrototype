class Arr {
    constructor() {
        this.length = 0 
        this.argumentsHandler.apply(this, arguments)
        console.log('Custom Array created.') 
    }   
    push(item) {
        this[this.length] = item
        this.length++
        return console.log(this, "pushed", item)
    }
    get pop() {
        if (this.length == 0) return console.error(
            `TypeError: Arr already empty. Cannot run Arr.pop at ${this}`)
        const lastItem = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        return console.log(this, "poped", lastItem)
    }
    del(index = 0) {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.del method.')
        const item = this[index]
        this.shiftIndex(index)
        return console.log(this, "deleted", item)
    }
    get shift() {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.shift method.')
        const item = this[0]
        this.shiftIndex(0)
        return console.log(this, "shifted", item)
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
        return console.log(this, "unshifted", item)
    }
    gen(item, index = 0) {
        if (this.detector(item, index)) return console.error(`TypeError: cannot run Arr.gen() method. Item existing already at index ${index}.`)         
        if (index > this.length) this.length = index
        this.unshiftIndex(index)
        this[index] = item
        console.log(this, "generated", item, "at", index)
    }
    unshiftIndex(index) {
        let condition = 0
        for (let i = this.length; i > condition; i--) {
            let debug = i - 0
            console.log('condition n°',i, condition, debug)
            if (debug == -1) break
            if (this[debug] !== undefined) {
                condition = index
                console.log('MY DEBUGGER xd',this[3], this[debug],i)
                this[i] = this[debug]
                continue
            }
            this[debug] = undefined
        }
        this.length++
    }
    argumentsHandler() {
        for (const argument of arguments) this.push(argument)
        console.log(this)
    }
    detector(item, index) {
        return (this[index] === item)
    }
}

const arr = new Arr('Diego', 'Karten', 'Oscar')
arr.gen('LLEGÓELPAVOOOEOHRGAEWGO', 4) // 11
arr.push() // 12
arr.push('miau') // 13
arr.push() // 14
arr.gen('LLEGÓELPAVOOOEOHRGAEWGO', 10) // 14
arr.gen('LLEGÓELPAVOOOEOHRGAEWGO', 20) // 21
arr.push('miau') // 22
arr.unshift() // 23

console.log('________________________________________________________________')