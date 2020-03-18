const https = require('https')

const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/45.45,8.61?units=si&lang=it'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data) 
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()