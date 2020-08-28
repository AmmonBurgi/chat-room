const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = {
    register: async(req, res) => {
        const {email, username, password} = req.body
        const existingUser = User.find({"email": email})
        console.log(existingUser)
        if(existingUser[0]){
            return res.status(401).send('Email already in use!')
        }

        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            email,
            username,
            hash
        })
        try {
            const user = await newUser.save();
            req.session.user = user[0]
            res.status(200).send(req.session.user)
        } catch(err){
            res.status(500).send(err);
        }
        // User.find().then(result => console.log(result))
    },
    // register: async(req, res) => {
    //     const db = req.app.get('db')
    //     console.log(req.body)
    //     const {email, username, password} = req.body
    //     let user = await db.auth.check_user(email)
    //     if(user[0]){
    //        return res.status(401).send('Email already in use')
    //     }
    //     let salt = bcrypt.genSaltSync(10)
    //     let hash = bcrypt.hashSync(password, salt)

    //     let newUser = await db.auth.register_user(email, username, hash)
    //     req.session.user = newUser[0]
    //     res.status(201).send(req.session.user)
    login: async(req, res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {email, password} = req.body

        let user = await db.auth.check_user(email)
        if(!user[0]){
           return res.status(401).send('Email does not exist')
        }

        let authenticated = bcrypt.compareSync(password, user[0].password)
        if(!authenticated){
           return res.status(401).send('Wrong Password')
        } 
        delete user[0].password
        req.session.user = user[0]
        res.status(202).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}