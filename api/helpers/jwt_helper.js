const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function signAccessToken(userId,role) {
    //data: id->user; role->user
    return new Promise((resolve, reject) => {
        const payload = {
            "userId": userId,
            "role": role
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const option = {
            expiresIn: "60s",
            issuer: "localhost:9999",
        }

        jwt.sign(payload,secret,option, (err, token) => {
            if (err) {
                console.log(err.message);
                
                //reject 
                reject(createError.InternalServerError());
            }
            //resolve about return accessToken
            resolve(token);
        });
    })
}

function signRefreshToken(userId,role) {
    return new Promise((resolve, reject) => {
        const payload = {
            "userId": userId,
            "role": role
        }
        const secret = process.env.REFRESH_TOKEN_SECRET;
        const option = {
            expiresIn: "1h",
            issuer: "localhost:9999",
        }

        jwt.sign(payload,secret,option, (err, token) => {
            if (err) {
                console.log(err.message);
                
                //reject 
                reject(createError.InternalServerError());
            }
            //resolve about return accessToken
            resolve(token);
        });
    })
}

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer '))
        return next(createError.Unauthorized());

    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, payload) => {
            if(err){
                return next(createError.Unauthorized());
            }
            req.payload = payload;
            next();
        }
    )
}

// để tạm chưa có update thêm 
function verifyRefreshToken(refreshToken) {
    return new Promise((resolve, reject) => {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, payload) => {
                if (err) {
                    return reject(createError.Unauthorized());
                }
                const userId = payload.aud;
                resolve(userId);
            }
        )
    })
}

module.exports = {
    signAccessToken,signRefreshToken,verifyJWT
}