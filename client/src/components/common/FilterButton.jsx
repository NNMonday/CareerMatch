import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const FilterButton = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <button type="button" className="btn px-3 py-2 btn-primary text-white">
                    <span>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                    </span>{' '}
                    Filter</button>
            </div>
            <div className="row col-lg-9 col-md-8 justify-content-end">
                <div className="col-lg-3">
                    <select className=" form-select form-select-lg border-end" aria-label=".form-select-lg example">
                        <option defaultValue={'0'}>Latest</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <select className=" form-select form-select-lg border-end" aria-label=".form-select-lg example">
                        <option defaultValue={'0'}>12 per page</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterButton;