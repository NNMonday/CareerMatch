const express = require('express');
const { createJobPost, updateJobPost, deleteJobPost, deactivateJobPost, activateJobPost, listJobPost, aJobPost,  } = require('../controllers/company.controller');
const companyRouter = express.Router();

companyRouter.post('/', createJobPost)
companyRouter.put('/update-jobs',updateJobPost)
companyRouter.post('/delete-a-job',deleteJobPost)
companyRouter.put('/deactivate-status-job',deactivateJobPost)
companyRouter.put('/activate-status-job',activateJobPost)
companyRouter.post('/list-jobs',listJobPost)
companyRouter.get('/specific-jobs/:JobID',aJobPost)

module.exports = companyRouter;