import React from 'react';

const SearchMega = () => {
    return (
        <div className='row'>
            <form className='col-12'>
                <div className='wrapper-searchmega d-lg-flex'>
                    <div className="col-lg-5 col-md-12">
                        <input className="inputSearch form-control form-control-lg border-end" type="search" placeholder="Job title, Keyword..." aria-label=".form-control-lg example" />
                    </div>
                    <div className="col-lg-3 col-md-12">  
                        <input className="inputselectLocation form-control form-control-lg border-end" list="datalistOptions" id="exampleDataList" type='search' placeholder="Location" />
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <select className="inputselectCategory form-select form-select-lg border-end" aria-label=".form-select-lg example">
                            <option defaultValue={'0'}>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-md-12'>
                    <button type="submit" className="btnFindJob btn px-4 py-3 btn-primary text-white rounded-0">Find Job</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchMega;