import React from 'react';
import FilterBar from '../../components/FilterBar';
import SearchMega from '../../components/common/SearchMega';
import BearkCrumb from '../../components/common/BearkCrumb';

const FindCandidatePage = () => {

    let itemCandidate = {
        name: 'Cody Fisher',
        field: 'Marketing Officer',
        location: 'New York',
        exprerience: '3 Year expreience',
    }

    return (
        <main className=''>
            <div className="header-intro p-3" style={{ 'color': '#F1F2F4' }}>
                <BearkCrumb />
                <SearchMega />
            </div>
            <FilterBar />
            <article className='row my-3'>
                <nav className='col-lg-3 col-md-3'>
                    <form class="accordion border-4" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <label class="accordion-header p-2" id="panelsStayOpen-location" htmlhtmlFor='location'>
                                <p class="mx-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Location Radius: &nbsp; <strong>32 miles</strong>
                                </p>
                            </label>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-location">
                                <div class="accordion-body">
                                    <input type="range" className='form-control form-control-lg' name='location' />
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <label class="accordion-header p-2" id="panelsStayOpen-level">
                                <p class="collapsed" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Candidate Level
                                </p>
                            </label>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-level">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                                            Entry Level
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                            Mid Level
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                                            Expert Level
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ----- */}

                        <div class="accordion-item">
                            <label class="accordion-header p-2" id="panelsStayOpen-level">
                                <p class="collapsed" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Experiences
                                </p>
                            </label>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-level">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                                            Freshers
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                            1 - 2 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                                            2 - 4 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault4">
                                            4 - 6 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault5">
                                            6 - 8 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault6">
                                            8 - 10 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault7">
                                            10 - 15 Years
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault8">
                                            15+ Years
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ----- */}
                        <div class="accordion-item">
                            <label class="accordion-header p-2" id="panelsStayOpen-level">
                                <p class="collapsed" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Education
                                </p>
                            </label>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-level">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault1" >
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault2" id="flexRadioDefault2" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                            High School
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault3" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                                            Intermediate
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault4" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault4">
                                            Graduation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault5" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault5">
                                            Master Degree
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault6" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault6">
                                            Bachelor Degree
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ----- */}

                        <div class="accordion-item">
                            <label class="accordion-header p-2" id="panelsStayOpen-level">
                                <p class="collapsed" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Gender
                                </p>
                            </label>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-level">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                                            Others
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </nav>
                <main className='col-lg-9 col-md-8'>
                    <div className=" row card-candidate p-2 border border-2 rounded-4">
                        <div className="col-lg-6 d-md-flex">
                            <img src="users/user-1.jpg" class="img-thumbnail rounded-4" alt="user-1.jpg" width={200} />
                            <div className="content-candidate p-2 d-md-flex flex-column justify-content-between">
                                <div className='content-candidate-group'>
                                    <h3>{itemCandidate.name}</h3>
                                    <p className='text-secondary'>{itemCandidate.field}</p>
                                </div>
                                <div className='content-candidate-group '>
                                    <div className="location-candidate">
                                        <span>🟠</span> {itemCandidate.location}
                                    </div>
                                    <div className="experience-candidate">
                                        <span>📝</span> {itemCandidate.exprerience}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-md-flex justify-content-end align-items-center">
                            <div> <button type="button" class="btn btn-outline-primary py-3 px-5">View Profile</button></div>
                        </div>
                    </div>
                </main>
            </article>
        </main>
    );
};

export default FindCandidatePage;