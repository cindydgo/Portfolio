import React from 'react';
import './Error.css';

const Error = ({ error }) => {
    console.log('Error occured', error);
    return (
    <div className='error-page'>
        <img src={NotFoundImage} alt='Page not found' />
        <p className='error-msg'>
            Something went wrong. Try clicking the refresh page button to reload the
            application.{' '}
        <button className='btn'>
            Refresh page
        </button>
        </p>
    </div>
)};

export default Error;