require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env,
    authCtrl = require('./authController'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    port = SERVER_PORT

app.use(express.json())


io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})
const nsp = io.of('http://localhost:4100/chat')
nsp.on('connection', (socket) => {
    console.log('chat user connected')
})

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
    server.listen(port, () => console.log(`Server listening on port ${port}`))
})

