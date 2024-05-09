import React from 'react';
import python_ad from  './python-02.jpg';

const PythonPage = () => {
    return (
    <>
        <div className="flex-item-large">
            <div>
                <a 
                    href= "/register"
                    id="advt"
                    rel="noreferrer">
                    <img
                        src={python_ad}
                        width="546" 
                        title="Python Tuitions for 11th & 12th"
                        alt="Python Tuitions"
                    />
                </a>
            </div>
        </div>
    </>
    )};

export default PythonPage;