// Highly recommended to run code among [npx nodemon array.js] command and a terminal spliting your screen horizontally for maximum comfort.
// I made it easy for you :D Just run [ npm run test ] command and you will be ready.

class Arr {
    // Naturally, length begins at 0
    // When user succesfully instances, it's notified via console.
    // The Arr is going to be created with all the elements the users passes as arguments to the instance.
    constructor() {
        this.length = 0 
        this.#argumentsHandler.apply(this, arguments)
        console.log('Custom Array created.') 
    }   
    // the classical push: adds an element at the end of your Arr.
    // if no argument is passed, "undefined" will be pushed to you Arr.
    push(item) {
        this[this.length] = item
        this.length++
        return console.log(this, "pushed", item)
    }
    // pop will kick off the last element of your Arr.
    // ! ATTENTION: pop it's a getter, so no need to () when calling it.
    get pop() {
        if (this.length == 0) return console.error(
            `TypeError: Arr already empty. Cannot run Arr.pop method`)
        const lastItem = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        return console.log(this, "poped", lastItem)
    }
    // by default, del will delete your first element, you can pass the index that you want delete from your array as an argument.
    del(index = 0) {
        if (index < 0 ) return console.error(`TypeError: Imposible to run Arr at negative indexes. 
    There's no such a thing like "negative indexes"
    **hides his quantic computer** hehe...`)
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.del() method.')
        if (index > this.length || (this.length == 1 && index == 1) ) return console.error(`TypeError: Imposible to run Arr.del() method. 
The Arr you are working with only have ${this.length == 1 ? '1 index: number 0' : `${this.length} indexes`}, index ${index} doesn't exist.`)

        const item = this[index]
        this.#shiftIndex = index
        return console.log(this, "deleted", item)
    }
    // shift will kick off the first element [index 0] of your Arr.
    // ! ATTENTION: shift is a getter, so no need to () when calling it.
    get shift() {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.shift method.')
        const item = this[0]
        this.#shiftIndex = 0
        return console.log(this, "shifted", item)
    }
    // private method. Nothing the user has to care about.
    set #shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this[i] = this[i + 1]
        }
        delete this[this.length - 1]
        this.length--
    }
    // unshift adds an element at the beginning [index 0] of your Arr.
    unshift(item) {
        let zero = 0
        this.#unshiftIndex = zero
        this[zero] = item
        return console.log(this, "unshifted", item)
    }
    // my fav one hehe... (jerks, it took me like a whole day to make it)
    // gen will generate the desired element in the desired index.
    // "undefined" and "index" are the default parameters if no item, index argument are passed, respectively.
    // ! User can choose any positive index, unused indexes will be filled with "undefined" by default (use it with discretion).
    gen(item, index = 0) {
        if (index < 0 ) return console.error(`TypeError: Imposible to run Arr at negative indexes. 
    There's no such a thing like "negative indexes"
    **hides his quantic computer** hehe...`)
        if (this.#detector(item, index)) return console.error(`TypeError: cannot run Arr.gen() method. Item existing already at index ${index}.`)  
        
        if (index > this.length) this.length = index
        this.#unshiftIndex = index
        this[index] = item
        console.log(this, "generated", item, "at", index)
    }
   // private method. Nothing the user has to care about. [it's the hearth!!!]
    set #unshiftIndex(index) {
        let condition = 0, length = this.length
        for (let i = this.length; i > condition; i--) {
            let itemBehind = i - 1
            if (itemBehind === -1) break
            
            if (this[itemBehind] !== undefined && index != 0) {
                condition = index
                if (this[i] && index > length) this[i] = this[itemBehind]
                if (index < length) this[i] = this[itemBehind]
                continue
            }
            if (this[i] && index > length) this[i] = this[itemBehind]
            if (index < length) this[i] = this[itemBehind]
            this[itemBehind] = undefined
            continue
        }
        this.length++
    }
    // this beauty is the one that allows Arr to take care of AAALLL your arguments.
    // ...and yep, it's private. Don't stare too much, move!
    #argumentsHandler() {
        for (const argument of arguments) this.push(argument)
        console.log(this)
    }
    // private method. Nothing the user has to care about.
    #detector(item, index) {
        return (this[index] === item)
    }
}

// just some testing
const arr = new Arr('Diego', 'Karten', 'Oscar')
arr.push()
arr.push('miau')
arr.push()
arr.push('miau')
arr.push('wow')
arr.pop
arr.pop
arr.pop
arr.del(-4)
arr.gen('miau',-2)
arr.gen('miau', 2)
arr.gen('cthulhu')
arr.gen('cthulhu', 10)
arr.gen()
console.log('________________________________________________________________')