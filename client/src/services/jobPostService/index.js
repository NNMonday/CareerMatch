
import http from '../index'
import { apiActivateJobPost, apiDeactivateJobPost, apiDeleteJobPost, apiGetAJobPost, apiGetAllJobPost, apiInsertJobPost, apiUpdateJobPost } from './urls'

const filterListJobPost = body => http.post(apiGetAllJobPost, body);
const insertJobPost = body => http.post(apiInsertJobPost, body);
const updateJobPost = body => http.put(apiUpdateJobPost, body);
const deleteJobPost = body => http.post(apiDeleteJobPost, body);
const getDetailJobPost = jobId => http.get(`${apiGetAJobPost}/${jobId}`);
const changestatusDeactivate = body => http.put(apiDeactivateJobPost, body);
const changestatusActivate = body => http.put(apiActivateJobPost, body);


const jobPostService = {
    filterListJobPost,
    insertJobPost, updateJobPost, deleteJobPost, getDetailJobPost, changestatusDeactivate, changestatusActivate
}

export default jobPostService;