// object property shorthand

const name = 'Fabio'
const userAge = 35

const user = {
    name,
    age: userAge,
    location: 'Novara'
}

console.log(user)

// object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 10
}

// destructuring plus default value for properties
// const {label: productLabel, price, rating = 5} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)

// destructuring directly in the parameter of an anonymous function
const transaction = (type, { label, stock }) => {
    console.log(type)
    console.log(label)
    console.log(stock)
}

transaction('order', product)

// handle default value for object that gets destructured
const transaction1 = (type, { label, stock = 42} = {}) => {
    console.log(type, label, stock)
    // label and stock are 'undefined' if the object to be destructured is not passed
}

transaction1('order')