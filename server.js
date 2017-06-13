const express = require('express')
const hbs = require('hbs')

var app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeText: 'Hi asshole. Welcome to my shithole.'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        statusCode: 401,
        errorMessage: 'Unauthorized'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})