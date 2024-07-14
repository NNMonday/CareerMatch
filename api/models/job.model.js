const db = require('../config/dbConnect');
const createError = require('http-errors');

async function findAllJob(pageSize, pageIndex, sortType = "DESC", statusJob = NULL, companyId) {

    const params = [pageSize, pageIndex, sortType, statusJob, companyId];
    return new Promise((resolve, reject) => {
        const callSP = "CALL FilterJob_Company(?, ?, ?, ?, ?)";

        db.query(callSP, params, (err, result) => {
            if (err) {
                reject(createError(500, "Not found Job post."))
            }
            resolve(result);
        })
    })
}

async function findByIdJob(jobId) {
    return new Promise((resolve, reject) => {
        const query = "SELECT u.email,u.phone,co.website,jo.* FROM careermatch.companies co INNER JOIN careermatch.users u \
                       ON co.user_id = u.id INNER JOIN careermatch.jobs jo ON co.id = jo.company_id WHERE jo.id = ?";

        db.query(query, [jobId], (err, result) => {
            if (err) {
                reject(createError(401, "Not found Job post."))
            }
            resolve(result);
        })
    })
}

async function createJob(params) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO careermatch.jobs VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        db.query(query, params, (err, result) => {
            if (err) {
                reject(createError(401, err))
            }
            console.log(result);
            resolve("OK Create");
        })
    })
}

async function updateJob(params) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE careermatch.jobs SET " +
            "location = ?," +
            "work_status = ?, " +
            "title = ?, " +
            "salary = ?," +
            "status = ?," +
            "quantity = ?," +
            "required_experience = ?," +
            "deadline = ?," +
            "description = ?," +
            "applicant_requirements = ?," +
            "benefits = ?," +
            "updateAt = ? " +
            "WHERE id = ?";

        db.query(query, params, (err, result) => {
            if (err) {
                reject(createError(401, err))
            }
            console.log(result);
            resolve("OK Update");
        })
    })
}

async function deleteJob(jobId) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM careermatch.jobs jo WHERE jo.id = ?";
        db.query(query, [jobId], (err, result) => {
            if (err) {
                reject(createError(401, "Not found Job post."))
            }
            console.log(result);
            resolve("OK DELETE");
        })
    })
}

async function changeStatusJob(params) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE careermatch.jobs SET  status = ? WHERE id = ?";
        db.query(query, params, (err, result) => {
            if (err) {
                reject(createError(401, err))
            }
            console.log(result);
            resolve(`OK Update status`);
        })
    })
}

module.exports = {
    findAllJob, findByIdJob, createJob, updateJob, deleteJob, changeStatusJob
}