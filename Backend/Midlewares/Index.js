const jwt = require("jsonwebtoken");

module.exports={
    verifyToken :(req, res, next) => {
        let token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send({
            message: "No token provided!"
            });
        }
        jwt.verify(token, "FAICALBAHSIS", (err, decoded) => {
            if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
                error:err
            });
            }
            next();
        });
    }
}
