
module.exports={
    Login: async (req, res) => {
        res.status(201).send({Message : "login"})
    },
    Logout: async (req, res) => {
        res.status(201).send({Message : "logout"})
    }
}