// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// NOTE: arrow functions don't bind their 'this' value

const event = {
    name: 'festa di compleanno',
    guestList: ['Fabio', 'Chiara', 'Antani'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()