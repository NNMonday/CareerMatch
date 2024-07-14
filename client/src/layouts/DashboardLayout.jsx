import React from 'react';

const DashboardLayout = (props) => {

    console.log(props);
    return (
        <div>
            {props.children}
        </div>
    );
};

export default DashboardLayout;