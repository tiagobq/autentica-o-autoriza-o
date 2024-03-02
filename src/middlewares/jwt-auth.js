const expressJwt = require(id: 'express-jwt')
const { jwt } = require(id:' ../config')

module.exports = {
jwtAuth: expressJwt({
secret: jwt.secret,
audience: jwt.audience,
issuer: jwt.issuer,
algorithms: ['HS256']
})
