const jwt    = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    // Get token from header

    const token = req.header('x-auth-token');

    // Check if no token 
    if(!token) {
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    // Verify token 
    try {

        // Decode the todken 
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        // You call next in all middleware 
        next();

    } catch(err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
}

