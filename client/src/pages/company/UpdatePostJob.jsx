import React, { useEffect, useRef, useState } from 'react';
import { convertFormat2, disablePastDates, setMinAndDefaultDate } from '../../utils/helper';
import RichText from '../../components/common/RichText';
import { COMPANY_ID_BASE, regexTakenIdJob } from '../../utils/constanst';
import jobPostService from '../../services/jobPostService';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useLocation, useParams } from 'react-router-dom';

function UpdatePostJob({ }) {
    const refDate = useRef(null);
    const descrRef = useRef(null);
    const benefitRef = useRef(null);
    const reqRef = useRef(null);
    const searchHhref = useLocation();
    const [job, setJob] = useState({
        jobId: '',
        title: '',
        location: '',
        work_status: '',
        salary: '',
        status: '',
        quantity: '',
        required_experience: '',
        deadline: '',
        description: '',
        applicant_requirements: '',
        benefits: ''
    });

    const getDetailJob = async (jobId) => {
        try {
            const res = await jobPostService.getDetailJobPost(jobId);
            if (res.data.length === 0) return;
            const { title, location, work_status, salary, status, quantity, required_experience, deadline, description, applicant_requirements, benefits } = await res.data[0];
            setJob({ jobId: jobId, title: title, location: location, work_status: work_status, salary: salary, status: status, quantity: quantity, required_experience: required_experience, deadline: deadline, description: description, applicant_requirements: applicant_requirements, benefits: benefits });
        } catch (error) {
            console.log('error:', error);
        }
    }

    useEffect(() => {
        const match = searchHhref?.search.match(regexTakenIdJob);
        if (!match) {
            return;
        }
        setJob({ ...job, id: match[1] });
        getDetailJob(match[1]);
    }, [searchHhref])

    const handleUpdate = async (e) => {
        const { name, value } = e.target;
        setJob(prevJob => ({
            ...prevJob,
            [name]: value
        }));

    }
    const handleUpdateContent = (content, id) => {
        setJob(prevJob => ({
            ...prevJob,
            [id]: content
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(job);
            const res = await jobPostService.updateJobPost(job);
            console.log(res);
            toast.success('Job post updated successfully!');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <ToastContainer />
            <div className='dashboard-content row p-5' style={{ "flex": 1 }}>
                <div className="col-12 col-md-12 col-12">
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className="title=page-dashboard">
                            <h4 className='py-2'>Update a job</h4>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="inputJob4" className="form-label">Job Title</label>
                                    <input type="text" className="form-control form-control-lg" id="inputJob4" name='title' value={job.title || ''} onChange={handleUpdate} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">location</label>
                                    <input className="inputselectLocation form-control form-control-lg border-end" list="datalistOptions" id="exampleDataList" type='search' placeholder="Location" name='location' onChange={handleUpdate} value={job.location || ''} />
                                    <datalist id="datalistOptions">
                                        <option value="Bac Ninh" />
                                        <option value="Hanoi" />
                                        <option value="Ho Chi Minh City" />
                                        <option value="Hai Duong" />
                                        <option value="Da Nang" />
                                    </datalist>
                                </div>
                                <div>
                                    <div className="col-12">
                                        <h5 className='my-2'>Salary</h5>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <label htmlFor="inputAddress" className="form-label">Min Salary</label>
                                                <div className="input-group mb-3">
                                                    <input type="number" className="form-control form-control-lg" placeholder="Minimum salery..." name='salary' aria-label="Minimum salery..." aria-describedby="basic-addon2" />
                                                    <span className="input-group-text" id="basic-addon2">VND</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="inputAddress2" className="form-label">Max Salary</label>
                                                <div className="input-group mb-3">
                                                    <input type="number" className="form-control form-control-lg" placeholder="Maximun salery..." name='salary' aria-label="Maximun salery..." aria-describedby="basic-addon3" value={job.salary || ''} onChange={handleUpdate} />
                                                    <span className="input-group-text" id="basic-addon3">VND</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h5 className='my-2'>Advance Information</h5>
                                    <div className="row g-3">
                                        <div className="col-4">
                                            <label htmlFor="required_experience" className="form-label">Experiences</label>
                                            <select className="form-select form-control-lg" id="required_experience" name='required_experience' onChange={handleUpdate} value={job.required_experience || ''} >
                                                <option defaultValue={'0'}>Choose...</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="work_status" className="form-label">Job type</label>
                                            <select className="form-select form-control-lg" id="work_status" name='work_status' onChange={handleUpdate} value={job.work_status || ''} >
                                                <option value="1">Part time</option>
                                                <option value="2">Full time</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="quantity" className="form-label">Numbets of applicants</label>
                                            <input type="number" className="form-control form-control-lg" placeholder="10" name='quantity' aria-label="quantity" aria-describedby="basic-addon2" value={job.quantity || ''} onChange={handleUpdate} />
                                        </div>
                                        <div className="col-4 mx-auto">
                                            <label htmlFor="inputAddress" className="form-label">Dealine time</label>
                                            <input type="date" className="form-control" onFocus={() => setMinAndDefaultDate(refDate, job.deadline)} ref={refDate} name='deadline' value={convertFormat2(job.deadline) || ''} onChange={handleUpdate} />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <h5 className='my-3'>Description & Responsibility</h5>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label htmlFor="">Applicant requirement</label>
                                            <RichText editorRef={reqRef} valueBefore={job.applicant_requirements} onChange={handleUpdateContent} id="applicant_requirements" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="">Benefit</label>
                                            <RichText editorRef={benefitRef} valueBefore={job.benefits} onChange={handleUpdateContent} id={"benefits"} />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="">Description</label>
                                            <RichText editorRef={descrRef} valueBefore={job.description} onChange={handleUpdateContent} id={"description"} />
                                        </div>

                                    </div>

                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Save change</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatePostJob;