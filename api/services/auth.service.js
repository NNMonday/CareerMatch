const { signAccessToken, signRefreshToken } = require('../helpers/jwt_helper');
const User = require('../models/user.model');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const sendEmail = require('../middleware/sentEmail');
const { hashPasswordHelper } = require('../helpers/common_helper');

async function loginService(email, password) {
    const user = await User.findByEmail(email);
    if (!user) {
        throw createError(400, 'Invalid email or password')
    }

    const isMatch = await bcrypt.compare(password, user.hashpassword);
    if (!isMatch) {
        throw createError(401, 'Invalid email or password')
    }

    //create token-accessToken|refreshToken
    const access_token = await signAccessToken(user.id, user.role);
    const refesh_token = await signRefreshToken(user.id, user.role);

    return { access_token, refesh_token };
}


async function registerService(userData) {
    const { email, password, phone, avatar, role } = userData;
    const user = await User.findByEmail(email);
    if (user) {
        throw createError(409, `${email} is already been registered.`);
    }
    // Creating new unique id
    const userId = uuidv4();
    const hashPassword = await hashPasswordHelper(password);
    await User.insertAUser({ id: userId, role, status: 'active', phone, email, password: hashPassword, avatar })
    return userId;
}

async function resetPasswordService(email) {
    const user = await User.findByEmail(email);
    if (!user) {
        throw createError(400, "user with given email doesn't exist");
    }
    const token =  jwt.sign({ "email": user.email }, "namnh in your area!");

    const link = `${process.env.BASE_URL}/auth/reset-password/${user.id}/${token}`;
    await sendEmail(user.email, "Password reset", link);

    return {token};
}

async function resetPasswordRequest(userId, newpassword) {
    const user = await User.findUserById(userId);
    if (!user) {
        throw createError(400, "Invalid link or expired");
    }
    //update
    const hashPassword = await hashPasswordHelper(newpassword);
    await User.updateUserPassword(userId, hashPassword);

}

async function verifyToken(cookieToken, token) {
    if (!cookieToken || cookieToken !== token) {
        throw createError(400, "Invalid link or expired.");
    }
}

module.exports = {
    loginService, registerService, resetPasswordService, resetPasswordRequest, verifyToken
}