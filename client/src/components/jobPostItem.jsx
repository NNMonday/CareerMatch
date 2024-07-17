import React, { useEffect, useState } from 'react';
import { ConvertDayRemaining, convertFormat } from '../utils/helper';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import jobPostService from '../services/jobPostService';
import { toast, Zoom } from 'react-toastify';


export const ViewDetailJob = ({ jobId }) => {
    const [job, setJob] = useState({});
    const objCompany = {
        imgage_avatar: "./users/user-1.jpg",
        website: "https://instagram.com",
        phone: "(406) 555-0120",
        email: "career@instagram.com"
    }

    const jobDetail = {
        jobTitle: "Senior UX Designer",
        work_status: "Full-time",
        description: "<p>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet. \n Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet orci interdum tincidunt.</p>",
        responsibilities: "<ul>" +
            "<li>Quisque semper gravida est et consectetur.</li>" +
            "<li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>" +
            "<li>Morbi mattis in ipsum ac tempus.</li>" +
            "<li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>" +
            "<li>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>" +
            "<li>lobortis vel lectus. Nulla at risus ut diam.</li>" +
            "<li>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>" +
            "<li>odio metus posuere lorem, id condimentum erat velit nec neque.</li>" +
            "<li>dui sodales ut. Curabitur tempus augue.</li>" +
            "</ul>",
        benefits: "<ul><li>bla bla bla ....</li></ul>" || null,
        jobPosted: "15,July,2024",
        jobExpireIn: "15,Angust,2024",
        experiences: "2 year",
        location: "Ha noi",
        salary: "1500" || null,
    }

    const getDetailJob = async (jobId) => {
        try {
            const res = await jobPostService.getDetailJobPost(jobId);
            if (res.data.length === 0) return;
            setJob(res.data[0]);
        } catch (error) {
            console.log('error:', error);
        }
    }

    useEffect(() => {
        getDetailJob(jobId);
    }, [jobId])

    return (
        <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{job.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-6">
                                    <div className='group-info-company d-flex align-items-center'>
                                        <div className=''>
                                            <img src={objCompany.imgage_avatar} className='rounded-circle' alt={objCompany.imgage_avatar} srcSet="" width={96} height={96} />
                                        </div>
                                        <div className='group-title-job'>
                                            <div className='title-job '>
                                                <p className='fw-bold fs-3 mb-0 position-relative'>{job.title}
                                                    <span className='sub-status position-absolute'>{job.work_status}</span>
                                                </p>

                                            </div>
                                            <div className='info-company'>
                                                <ul className='group-info d-flex flex-wrap list-unstyled'>
                                                    <li> <span>{job.website}</span></li>
                                                    <li><span>{job.phone}</span></li>
                                                    <li> <span>{job.email}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3 col-md-3 col-lg-3 offset-3 offset-md-3 offset-lg-3'>
                                    <button type='button' className='btn btn-primary px-5 py-3 mt-3 rounded-0'>Apply Now 👈🏼</button>
                                    <p className='mt-2'>Job expire in: <span className='text-danger'>{convertFormat(job.deadline)}</span></p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className='col-7 col-md-7 col-lg-7'>
                                    <div className="description-job mb-3">
                                        <h5 className='text-uppercase mb-2'>Job Description</h5>
                                        {parse(job?.description || '')}
                                    </div>
                                    <div className="responsibilities-job mb-3">
                                        <h5 className='text-uppercase mb-2'>Responsibilities</h5>
                                        {parse(job?.applicant_requirements || '')}
                                    </div>
                                    <div className="benefit-job mb-3">
                                        <h5 className='text-uppercase mb-2'>Benefit of you:</h5>
                                        {parse(job?.benefits || '')}
                                    </div>
                                </div>
                                <div className='col-5 col-md-5 col-lg-5 '>
                                    <h5 className='mb-2'>Job Overview</h5>
                                    <div className="group-infoJob jobOverview">
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">Job Posted:</p>
                                            <p className='fw-bold'> {convertFormat(job.createdAt)} </p>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">Job expire in:</p>
                                            <p className='fw-bold'>{convertFormat(job.deadline)}</p>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">experiences</p>
                                            <p className='fw-bold'>{job.required_experience}</p>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">location</p>
                                            <p className='fw-bold'>{job.location}</p>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">Job tytpe</p>
                                            <p className='fw-bold'>{job.work_status}</p>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-icon">
                                                <img src="fi_search.png" alt="fi-search.png" srcSet="" width={32} height={32} />
                                            </div>
                                            <p className="title-info text-uppercase fs-6 my-3">Salary</p>
                                            <p className='fw-bold'>{job.salary} VND</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export const ConfirmChangeStatus = ({ jobId }) => {
    return (
        <div className="modal fade" id="confirmModal" tabIndex={"-1"} aria-labelledby="confirmlabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger">
                        <h5 className="modal-title text-white" id="confirmlabel">Wait!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ARE U SURE? Delete job <b>{jobId}</b>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function JobPostItem({ data, setjobId, onOk }) {
    
    const handleChoice = async (e) => {
        try {
            let statusChange = e.target.value;
            switch (statusChange) {
                case "publish":
                        await jobPostService.changestatusActivate({jobId: data?.id});
                    break;

                case "pending":
                        await jobPostService.changestatusDeactivate({jobId: data?.id});
                    break;
                case "draft":
                        window.alert("feature will be updated! :D")
                    break;
            }
            toast.success(' Change status job!', {
                position: "top-center",
                autoClose: 2100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
                onOk();

        } catch (error) {
            console.log('error:',error);
        }
    }
    return (
        <tr key={data.id}>
            <th scope="row">
                <div className='job-title'>
                    <h5 className='fw-bold'>{data?.title}</h5>
                    <div className="sub-content">
                        <span>{data?.work_status}</span> . <span>{ConvertDayRemaining(data?.deadline)}</span>
                    </div>
                </div>
            </th>
            <td>
                <div className="job-status">
                    <select className="form-select" aria-label="job-status" defaultValue={data.status} onChange={handleChoice}>
                        <option value="publish" className='text-success'>
                            🟢 Active
                        </option>
                        <option value="pending" className='text-danger'>
                            🔴 Pending
                        </option>
                        <option value="draft" className='text-warning'>
                            🟡 Draft
                        </option>
                    </select>
                </div>
            </td>
            <td>
                <div className="job-applications">
                    <p className='fs-4'>🫡 {data?.application_count} Applications</p>
                </div>
            </td>
            <td>
                <Link to={''} className='btn rounded-0 btn-dark px-4 py-3' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setjobId(data?.id)} >View details</Link>
                <Link className="btn-group">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <path d="M24 25.125C24.6213 25.125 25.125 24.6213 25.125 24C25.125 23.3787 24.6213 22.875 24 22.875C23.3787 22.875 22.875 23.3787 22.875 24C22.875 24.6213 23.3787 25.125 24 25.125Z" fill="#767F8C" stroke="#767F8C" />
                        <path d="M24 18.6504C24.6213 18.6504 25.125 18.1467 25.125 17.5254C25.125 16.9041 24.6213 16.4004 24 16.4004C23.3787 16.4004 22.875 16.9041 22.875 17.5254C22.875 18.1467 23.3787 18.6504 24 18.6504Z" fill="#767F8C" stroke="#767F8C" />
                        <path d="M24 31.6104C24.6213 31.6104 25.125 31.1067 25.125 30.4854C25.125 29.864 24.6213 29.3604 24 29.3604C23.3787 29.3604 22.875 29.864 22.875 30.4854C22.875 31.1067 23.3787 31.6104 24 31.6104Z" fill="#767F8C" stroke="#767F8C" />
                    </svg>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li className='p-1 text-center'>
                            <Link to={`/update-a-job?id=${data?.id}`}>Update job posting</Link>
                        </li>
                        <li className='p-1 text-center' data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={() => setjobId(data?.id)}>Delete job posting</li>
                    </ul>
                </Link>
            </td>
        </tr>
    );
}

export default JobPostItem;