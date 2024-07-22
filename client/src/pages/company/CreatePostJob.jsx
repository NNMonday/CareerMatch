import React, { useRef, useState } from "react";
import BearkCrumb from "../../components/common/BearkCrumb";
import { disablePastDates, setMinAndDefaultDate } from "../../utils/helper";
import RichText from "../../components/common/RichText";
import { COMPANY_ID_BASE } from "../../utils/constanst";
import jobPostService from "../../services/jobPostService";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreatePostJob(props) {
  const refDate = useRef(null);
  const descrRef = useRef(null);
  const benefitRef = useRef(null);
  const reqRef = useRef(null);
  const [jobPost, setjobPost] = useState({
    company_id: COMPANY_ID_BASE,
    title: "",
    location: "",
    work_status: "",
    salary: "",
    status: "pending",
    quantity: "",
    required_experience: "",
    deadline: "",
    // description: '',
    // applicant_requirements: '',
    // benefits: '',
    createdAt: "",
  });

  const handleInput = (e) => {
    setjobPost({ ...jobPost, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleInsertJob = async (e) => {
    e.preventDefault();
    try {
      if (!descrRef.current || !reqRef.current || !benefitRef.current) {
        return;
      }
      let res = await jobPostService.insertJobPost({
        ...jobPost,
        description: descrRef.current.getContent(),
        applicant_requirements: reqRef.current.getContent(),
        benefits: benefitRef.current.getContent(),
      });

      if (res.error) {
        return;
      }
      toast.success(" Create job successfull!", {
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
      navigate("/my-job");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="dashboard-content row p-5" style={{ flex: 1 }}>
        <div className="col-12 col-md-12 col-12">
          <div className="col-12 col-md-12 col-lg-12">
            Home / Job / Senior UI/UX Designer / Applications
            <div className="title=page-dashboard">
              <h4 className="py-2">Post a job</h4>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div>
              <form className="row g-3" onSubmit={handleInsertJob}>
                <div className="col-md-12">
                  <label htmlFor="inputJob4" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="inputJob4"
                    name="title"
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    location
                  </label>
                  <input
                    className="inputselectLocation form-control form-control-lg border-end"
                    list="datalistOptions"
                    id="exampleDataList"
                    type="search"
                    placeholder="Location"
                    name="location"
                    onChange={handleInput}
                  />
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
                    <h5 className="my-2">Salary</h5>
                    <div className="row g-2">
                      <div className="col-6">
                        <label htmlFor="inputAddress" className="form-label">
                          Min Salary
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Minimum salery..."
                            name="salary"
                            aria-label="Minimum salery..."
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            VND
                          </span>
                        </div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="inputAddress2" className="form-label">
                          Max Salary
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Maximun salery..."
                            name="salary"
                            aria-label="Maximun salery..."
                            aria-describedby="basic-addon3"
                            onChange={handleInput}
                          />
                          <span className="input-group-text" id="basic-addon3">
                            VND
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Advance Information</h5>
                  <div className="row g-3">
                    <div className="col-4">
                      <label
                        htmlFor="required_experience"
                        className="form-label"
                      >
                        Experiences
                      </label>
                      <select
                        className="form-select form-control-lg"
                        id="required_experience"
                        name="required_experience"
                        onChange={handleInput}
                      >
                        <option defaultValue={"0"}>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="work_status" className="form-label">
                        Job type
                      </label>
                      <select
                        className="form-select form-control-lg"
                        id="work_status"
                        name="work_status"
                        onChange={handleInput}
                      >
                        <option value="1">Part time</option>
                        <option value="2">Full time</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="quantity" className="form-label">
                        Numbets of applicants
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="10"
                        name="quantity"
                        aria-label="quantity"
                        aria-describedby="basic-addon2"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-4 mx-auto">
                      <label htmlFor="inputAddress" className="form-label">
                        Dealine time
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onFocus={() => setMinAndDefaultDate(refDate, null)}
                        ref={refDate}
                        name="deadline"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className="my-3">Description & Responsibility</h5>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="">Applicant requirement</label>
                      <RichText editorRef={reqRef} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Benefit</label>
                      <RichText editorRef={benefitRef} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Description</label>
                      <RichText editorRef={descrRef} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePostJob;
