const bcrypt = require('bcryptjs')
module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {email, username, password} = req.body

        let user = await db.auth.check_user(email)
        if(user[0]){
           return res.status(401).send('Email already in use')
        }
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)

        let newUser = await db.auth.register_user(email, username, hash)
        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
    },
    login: async(req, res) => {
        const db = req.app.get('db')
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