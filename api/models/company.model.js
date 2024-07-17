const createError = require('http-errors');
const db = require('../config/dbConnect');


async function createCompany(params) {
    return new Promise ((resolve, reject) => {
        const query = "INSERT INTO  careermatch.companies(id,user_id,name,description) VALUES (?,?,?,?)";
        db.query(query,params,(err, results) => {
            if (err) {
                return reject(createError(400,err));
            }
            console.log(results);
            resolve("OK insert company successfull!");
        })
    })
}


module.exports = {
    createCompany
}