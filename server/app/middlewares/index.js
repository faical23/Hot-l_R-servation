const jwt = require('jsonwebtoken');

module.exports =  {
    checkifauth:(req, res, next) => {
        try {
          const token = req.headers.authorization.split(' ')[1];
          const decodedToken = jwt.verify(token, 'secret');
          const userId = decodedToken.user._id;
          // console.log(docedeToken);
          req.userId=userId;
          next();
        } catch {
          res.status(401).json({
            error: "unauthorized !"
          });
        }
      }
}