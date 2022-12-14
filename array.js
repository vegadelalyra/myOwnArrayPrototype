// Highly recommended to run code among [npx nodemon array.js] command and a terminal spliting your screen horizontally for maximum comfort.
// I made it easy for you :D Just run [ npm run test ] command and you will be ready.
    /**
     * Arr prototype. 
     *
     * Custom Array Object created by Vegadelalyra <lyradeperseo@gmail.com>.
     *
     * @access     private
     *
     * @constructs namespace.Class
     *
     * @alias    Arr
     *
     * @see   #argumentsHandler/class relied on
     * @link  https://github.com/vegadelalyra/myOwnArrayPrototype
     * @fires Class#argumentsHandler
     *
     * @param {Object} attributes     Items.
     * @param {type}   attributes.key One of the model's attributes.
     * @param {Object} [items]     All of the argued items will be passed.
     * @param {type}   any type of data can be stored at Arr.
     */
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
            /**
 * Adds one element at the end of your Arr.
 *
 * @since  0.0.1
 * @access public
 *
 * @param {any} object, undefined by default.
 *
 * @member   {method} push
 * @memberof Arr
 */
    push(item) {
        this[this.length] = item
        this.length++
        return console.log(this, "pushed", item)
    }
    // pop will kick off the last element of your Arr.
    // ! ATTENTION: pop it's a getter, so no need to () when calling it.
            /**
    * Getter.
    * 
    * Deletes the last index element of the Arr.
    *
    * @method                   {getter} del
    * @return {object} -        The array modified.
    * @member {method} pop
    * @memberof Arr
    */
    get pop() {
        if (this.length == 0) return console.error(
            `TypeError: Arr already empty. Cannot run Arr.pop method`)
        const lastItem = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        return console.log(this, "poped", lastItem)
    }
    /**
    * By default, deletes the first element.
    * 
    * Deletes one given index from the Arr.
    *
    * @method del
    * @param {number} x -       An integer.
    * @return {object}  -       The array modified.
    */
    del(index = 0) {
        if (index < 0) return console.error(`TypeError: Imposible to run Arr at negative indexes. 
    There's no such a thing like "negative indexes"
    **hides his quantic computer** hehe...`)
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.del() method.')
        if (index > this.length || (this.length == 1 && index == 1)) return console.error(`TypeError: Imposible to run Arr.del() method. 
The Arr you are working with only have ${this.length == 1 ? '1 index: number 0' : `${this.length} indexes`}, index ${index} doesn't exist.`)

        const item = this[index]
        this.#shiftIndex = index
        return console.log(this, "deleted", item)
    }
    // shift will kick off the first element [index 0] of your Arr.
    // ! ATTENTION: shift is a getter, so no need to () when calling it.
        /**
    * Getter.
    * 
    * Deletes the first index element of the Arr.
    *
    * @method {getter} del
    * @return {object} -        The array modified.
    */
    get shift() {
        if (this.length == 0) return console.error(
            'TypeError: Arr already empty. Cannot run Arr.shift method.')
        const item = this[0]
        this.#shiftIndex = 0
        return console.log(this, "shifted", item)
    }
    // private method. Nothing the user has to care about.
            /**
    * Setter.
    * 
    * Relocate Arr indexes after shifted.
    * @access     private
    * @method {getter} del
    * @return {object} -        The array modified.
    */
    set #shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this[i] = this[i + 1]
        }
        delete this[this.length - 1]
        this.length--
    }
    // unshift adds an element at the beginning [index 0] of your Arr.
            /**
 * Adds one element at the beginning  of the Arr.
 *
 * @since  0.0.1
 * @access public
 *
 * @param {any} object, undefined by default.
 *
 * @member   {method} unshift
 * @memberof Arr
 */
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
                /**
 * Adds one element at any index of the Arr. By default, inserts 'undefined' at the beginning of the Arr.
 * 
 * If unexistent index is chosen, skkiped indexes will be filled with 'undefined'.
 *
 * @param    {object} item,    undefined by default.
 * @param    {number} index,   0 by default.
 * @member   {method} gen
 * @memberof Arr
 */
    gen(item, index = 0) {
        if (index < 0) return console.error(`TypeError: Imposible to run Arr at negative indexes. 
    There's no such a thing like "negative indexes"
    **hides his quantic computer** hehe...`)
        if (this.#detector(item, index)) return console.error(`TypeError: cannot run Arr.gen() method. Item existing already at index ${index}.`)

        if (index > this.length) this.length = index
        this.#unshiftIndex = index
        this[index] = item
        console.log(this, "generated", item, "at", index)
    }
    // private method. Nothing the user has to care about. [it's the hearth!!!]}
                /**
 * Setter.
 * 
 * Relocate the Arr indexes after unshifted.
 * 
 * @access            private
 * @param    {number} index,        given by unshift method.
 * @member   {setter} unshiftIndex
 * @memberof Arr
 */
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
/**.
 * Insert all arguments of instance inside the Arr.
 * 
 * @access              private
 * @param    {any}      items,     Any data can be stored inside an Arr.
 * @member   {method}              #argumentsHandler
 * @memberof Arr
 */
    #argumentsHandler() {
        for (const argument of arguments) this.push(argument)
        console.log(this)
    }
    // private method. Nothing the user has to care about.
/**.
 * Detects if an item already exits in the same given index.
 * 
 * @access              private
 * @param    {any}      item,    The searched item.
 * @param    {number}   index,   In which index searchment will be done.
 * @member   {method}            #detector
 * @memberof Arr
 */
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
arr.gen('miau', -2)
arr.gen('miau', 2)
arr.gen('cthulhu')
arr.gen('cthulhu', 10)
arr.gen()
console.log('________________________________________________________________')

export default Arr


/**
* Add two numbers together, then returns the result
*
* @function addStuf
* @param {number} x -       An integer.
* @param {number} y -       An integer.
* @return {number} -        An integer
*/