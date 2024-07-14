import React from 'react';

const BearkCrumb = () => {
    return (
        <div className='row'>
            <div className="col">
                <p className='title__page text-black'>Find Companies</p>
            </div>
            <div className="col">
                <nav aria-label="breadcrumb me-auto">
                    <ol class="breadcrumb justify-content-end">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Find Companies</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default BearkCrumb;