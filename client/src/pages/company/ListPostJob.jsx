import React, { useEffect, useState } from 'react';
import jobPostService from '../../services/jobPostService';
import { COMPANY_ID_BASE } from '../../utils/constanst';
import JobPostItem, { ConfirmChangeStatus, ViewDetailJob } from '../../components/jobPostItem';
import NotFound from '../../components/NotFound';
import { ToastContainer } from 'react-toastify';
import PaginationBasic from '../../components/PaginationBasic';


function ListPostJob(props) {
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        pageSize: 3,
        pageCurrent: 1,
    });
    const [filterJobPost, setFilterJobPost] = useState({
        sortType: "DESC",
        statusJob: "publish"
    });
    const [jobId, setjobId] = useState(null);
    const [total, setTotal] = useState(0 || '0');
    const [jobs, sejobs] = useState([]);
    const getJobPostByCompany = async () => {
        try {
            setLoading(true);
            const res = await jobPostService.filterListJobPost({ companyId: COMPANY_ID_BASE, ...filterJobPost, ...pagination });
            if (res.error) return;
            sejobs(res.data);
            setTotal(res?.paginationInfo[0]?.TotalPageSize);
            setLoading(false);
        } catch (error) {
            console.log("error:", error);
        }
    }

    useEffect(() => {
        getJobPostByCompany();
    }, [pagination, filterJobPost]);


    const handleChoiceStatus = (e) => {
        setFilterJobPost({
            ...filterJobPost, statusJob: e.target.value
        })
    }

    return (
        <>

            <ToastContainer />
            <div className='dashboard-content row p-5' style={{ "flex": 1 }}>
                <div className="col-12 col-md-12 col-12">
                    <div className='row col-12 col-md-12 col-lg-12 '>
                        <div className="title=page-dashboard col-4 col-md-4 col-lg-4">
                            <h4 className='py-2'>My Job ({jobs.length === 0 ? 0 : jobs.length}) </h4>
                        </div>
                        <div className='select-statusJob col-2 offset-3 offset-md-6  offset-lg-6 d-flex align-items-center'>
                            <p className='p-0 mx-2 mb-0'>Job Status: </p>
                            <div className='col-3 col-md-3 col-lg-3' style={{ "flex": 1 }}>
                                <select className="form-select" aria-label="Default select example" defaultValue={'publish'} onChange={handleChoiceStatus}>
                                    <option value="publish">Publish</option>
                                    <option value="pending">Pending</option>
                                    <option value="draft">draft</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {
                        !loading ? <> {jobs.length ?


                            <div className='col-12 col-md-12 col-lg-12'>

                                <table className="table table-hover">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">JOBS</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">APPLICATIONS</th>
                                            <th scope="col">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            jobs?.map((_job, i) => <JobPostItem data={_job} key={i} setjobId={setjobId} onOk={() => getJobPostByCompany()} />)
                                        }
                                    </tbody>
                                </table>
                               <PaginationBasic
                               total={Number(total)}
                               current={pagination.pageCurrent}
                               onOk={e => setPagination({ ...pagination, pageCurrent: e })}
                               />
                            </div>
                            : <NotFound />} </> : '... Loading'
                    }
                </div>
            </div>

            <ViewDetailJob jobId={jobId} />
            <ConfirmChangeStatus jobId={jobId} />
        </>
    );
}

export default ListPostJob;