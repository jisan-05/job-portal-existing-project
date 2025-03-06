/**
 *              JWT
 * -------------------------------
 * 
 * install  jsonwebtoken cookie-parser
 * set cookieParser as middleware
 * 
 * 1. create a token
 * 
 * set token to the cookie of res.cookie('token', token, {
 *  httpOnly:true,
 *  secure:false
 * }).send({})
 * 
 * 
 * cors({
 *  origin:[''],
 *  credentials: true
 * })
 * 
 * client: {
 *  withCredentials: true
 * }
 * 
 * 2. send the token to the client side. make sure token is in the cookies
(application)
 *
 *3. 
 *
 *
 *
 */