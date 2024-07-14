const express = require("express");
const { login, register, forgotPassWord, resetPassWord, logout } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post('/login',login);
authRouter.post('/register',register);
authRouter.post('/forgot-password',forgotPassWord);
authRouter.post('/reset-password/:userId/:token',resetPassWord);

module.exports = authRouter;