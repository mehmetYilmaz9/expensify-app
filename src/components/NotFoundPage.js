import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => 
    //go back to page Home without refreshing the page
    (
        <div>
            <p>Love404!!!! </p>
            <Link to="/">GoHomeVieJS</Link>
        </div>
    );


export default NotFoundPage;