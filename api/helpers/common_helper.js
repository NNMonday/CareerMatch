const bcrypt = require('bcrypt');

async function hashPasswordHelper(password) {
    return bcrypt.hash(password, parseInt(process.env.PASSWORD_SECRET));
}

module.exports = {
    hashPasswordHelper
}