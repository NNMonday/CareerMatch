const { loginService, registerService, resetPasswordService, resetPasswordRequest, verifyToken } = require("../services/auth.service");
const createError = require('http-errors');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { access_token, refesh_token } = await loginService(email, password);
        res.cookie('access_token', access_token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            //secure: true; //ssl nếu có, nếu chạy localhost thì comment nó lại
        })
        res.status(200).json({ email, refesh_token });
    } catch (error) {
        next(createError(500, error));
    }
}

const register = async (req, res, next) => {
    try {
        const { email, password, phone, avatar, role } = req.body;
        if (!email || !password) {
            throw createError(401, 'Invalid email or password');
        }
        req.userId = await registerService({ email, password, phone: phone || null, avatar: avatar || null, role });
        next();
    } catch (error) {
        next(createError(500, error));
    }
}

const forgotPassWord = async (req, res, next) => {
    // verification email in db
    // if ok, sent token is save cookie,code verify to email in 30s
    // verification code input and code sent to email
    // if ok, user can input new password, --> Update password in db
    try {
        const { email } = req.body;
        if (!email) {
            throw createError(401, 'Invalid email');
        }
        const { token } = await resetPasswordService(email);
        res.cookie('tokenResetPassword', token, {
            maxAge: 30 * 1000,
            httpOnly: true,
        })
        res.status(200).json({ message: "password reset link sent to your email account" });
    } catch (error) {
         next(createError(500, error));
    }

}

const resetPassWord = async (req, res, next) => {
    try {
        const { newpassword } = req.body;
        const { userId, token } = req.params;
        const cookieToken = req.cookies.tokenResetPassword;

        if(!newpassword){
            throw createError(401,'Invalid password');
        }
        await verifyToken(cookieToken, token);
        await resetPasswordRequest( userId, newpassword);

        res.clearCookie(cookieToken);
        res.status(201).json({message: "Password reset successfull."})
    } catch (error) {
        next(createError(500, error));
        // return next(createError(400, 'Invalid user ID'));
    }
}


const userVerification = (req, res) => {

}


module.exports = {
    login, register, forgotPassWord, resetPassWord, userVerification, 
}