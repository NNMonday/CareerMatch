const db = require('../config/dbConnect');
const createError = require('http-errors');


async function findByEmail(email) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM careermatch.users WHERE email = ?";
        db.query(query, [email], (err, result) => {
            if (err) {
                return reject(createError.BadRequest());
            }
            resolve(result[0]);
        })
    })
}

async function insertAUser(userData) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO careermatch.users (id,role,status,phone,email,hashpassword,avatar) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const { id, role, status, phone, email, password, avatar } = userData;
        db.query(query, [id, role, status, phone, email, password, avatar], (err, results) => {
            if (err) {
                return reject(createError(400,err));
            }
            resolve({ id, phone, email, avatar, role });
        });
    });
}

async function findUserById(id) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM careermatch.users WHERE id = ?";
        db.query(query,[id],(err,result) => {
            if(err){
                return reject(createError.NotFound());
            }
            resolve(result[0]);
        })
        
    })
}

async function updateUserPassword(id,hashPassword){
    return new Promise((resolve, reject) => {
        const query = "UPDATE careermatch.users SET hashpassword = ? WHERE id = ?";
        db.execute(query,[hashPassword, id], (err, result) => {
            if(err){
                return reject(createError(400,err));
            }
            resolve({ id });
        })
    })
}


module.exports = {
    findByEmail, insertAUser, findUserById, updateUserPassword
}