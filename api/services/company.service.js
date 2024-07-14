const { v4: uuidv4 } = require('uuid');
const Job = require('../models/job.model');
const createError = require('http-errors');
const format = require('date-format');
async function getListJobPost(pageSize, pageCurrent, sortType, statusJob, companyId) {
    const pageSizeParse = parseInt(pageSize);
    const pageCurrentParse = parseInt(pageCurrent);
    const data = await Job.findAllJob(pageSizeParse, pageCurrentParse, sortType, statusJob, companyId);
    return { listJob: data[0], paginateInfo: data[1] };
}

async function getAJobPost(JobID) {
    if (!JobID) {
        createError(400, "Invaild id of Job");
    }
    const jobDetail = await Job.findByIdJob(JobID);
    return { jobDetail };
}

async function createJobService({ company_id, location, work_status, title, salary, status, quantity, required_experience, deadline, description, applicant_requirements, benefits, createdAt }) {
    //validate input
    if (!company_id || !title || !status || !quantity || !required_experience || !deadline || !description || !applicant_requirements || !benefits || !createdAt) {
        createError(400, "Invaild input job");
    }
    let jobId = uuidv4();
    let currentNow = format(new Date());
    let afterCheckInput = [jobId, company_id, location || null, work_status || null, title, salary || null, status, quantity, required_experience, deadline, description, applicant_requirements, benefits, currentNow, null];
    const info = await Job.createJob(afterCheckInput);
    return info;

}

async function updateJobService({ jobId, location, work_status, title, salary, status, quantity, required_experience, deadline, description, applicant_requirements, benefits, updateAt }) {
    //validate input
    if (!jobId || !title || !status || !quantity || !required_experience || !deadline || !description || !applicant_requirements || !benefits || !updateAt) {
        createError(400, "Invaild input job");
    }
    let currentNow = format(new Date());
    let afterCheckInput = [location, work_status, title, salary, status, quantity, required_experience, deadline, description, applicant_requirements, benefits, currentNow, jobId];
    const info = await Job.updateJob(afterCheckInput);
    return info;
}

async function deleteJobService(JobID) {
    if (!JobID) {
        createError(400, "Invaild id of Job");
    }
    const info = await Job.deleteJob(JobID);
    return info;
}

async function deactivateJobService({ jobId }) {
    if (!jobId) {
        createError(400, "Invaild id,status of Job");
    }
    let afterCheckInput = ["reject", jobId];
    const info = await Job.changeStatusJob(afterCheckInput);
    return info;
}
async function activateJobService({ jobId }) {
    if (!jobId) {
        createError(400, "Invaild id,status of Job");
    }
    let afterCheckInput = ["publish", jobId];
    const info = await Job.changeStatusJob(afterCheckInput);
    return info;
}

module.exports = {
    getListJobPost, getAJobPost, createJobService, updateJobService, deleteJobService, deactivateJobService, activateJobService
}