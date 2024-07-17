const createError = require('http-errors');
const { getListJobPost, getAJobPost, createJobService, updateJobService, deleteJobService, deactivateJobService, activateJobService, insertCompany } = require('../services/company.service');





async function processInsertCompany(req,res, next) {
    try {
        await insertCompany(req.body);
        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        next(createError(500, error));
    }
}

/*
method 1: View List Jobs Created 
GET: /list-jobs/:job
data: 
*/
async function listJobPost(req, res, next) {
    try {
        const { statusJob, pageSize, pageCurrent, sortType, companyId } = req.body;
        if (!companyId) {
            throw createError(401, 'Invalid companyId');
        }
        const { paginateInfo, listJob } = await getListJobPost(pageSize, pageCurrent, sortType, statusJob, companyId);
        res.status(201).json({ data: listJob, paginationInfo: paginateInfo, message: `list job-post of company_id ${companyId}` })
    } catch (error) {
        next(createError(500, error));
    }

}
/**
 * method 2: View A Specific Jobs Created
 * GET: /specific-jobs/:JobID
 * data:
 */
async function aJobPost(req, res, next) {
    try {
        const { JobID } = req.params;
        const { jobDetail } = await getAJobPost(JobID);
        res.status(201).json({ data: jobDetail, message: `job-post detail with id ${JobID}` })

    } catch (error) {
        next(createError(500, error));
    }
}
/**
 * method 3: Create A Job 
 * POST: /
 * data:
 */
async function createJobPost(req, res, next) {
    try {
        const infoCreate = await createJobService(req.body);
        res.status(201).json({ message: infoCreate });
    } catch (error) {
        next(createError(500, error));
    }
}
/**
 * method 4: Update A Job 
 * PUT: /update-jobs
 * data:
 */
async function updateJobPost(req, res, next) {
    try {
        const infoUpdate = await updateJobService(req.body);
        res.status(201).json({ message: infoUpdate });
    } catch (error) {
        next(createError(500, error));
    }
}
/**
 * method 5: Delete A Job 
 * DELETE: /delete-a-job
 * data:
 */
async function deleteJobPost(req, res, next) {
    try {
        const { JobID } = req.body;
        const info = await deleteJobService(JobID);
        res.status(201).json({ message: info })

    } catch (error) {
        next(createError(500, error));
    }
}
//---------------status
/**
 * method 6: Deactivate A Job 
 * PUT: /activate-status-job/:jobID
 * data:
 */
async function deactivateJobPost(req, res, next) {
    try {
        const infoUpdateStatus = await deactivateJobService(req.body);
        res.status(201).json({ message: infoUpdateStatus });
    } catch (error) {
        next(createError(500, error));
    }
}
/**
 * method 7: Activate A Job 
 * PUT: /activate-status-job/:jobID
 * data:
 */
async function activateJobPost(req, res,next) {
    try {
        const infoUpdateStatus = await activateJobService(req.body);
        res.status(201).json({ message: infoUpdateStatus });
    } catch (error) {
        next(createError(500, error));
    }
}

module.exports = {
    listJobPost, aJobPost, createJobPost, updateJobPost, deleteJobPost, deactivateJobPost, activateJobPost, processInsertCompany
}