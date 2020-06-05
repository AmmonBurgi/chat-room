require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env,
    authCtrl = require('./authController'),
    app = express(),
    port = SERVER_PORT

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookies: {maxAge: 1000 * 60 * 60 * 24}
    }))
    
//Auth Endpoints
app.get('/api/logout', authCtrl.logout)
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(port, () => console.log(`Server listening on port ${port}`))
})

