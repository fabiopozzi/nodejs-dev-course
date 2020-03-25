const doWorkCallback = (callback) => {
    setTimeout(()=> {
        console.log('This is my error!', undefined)
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})