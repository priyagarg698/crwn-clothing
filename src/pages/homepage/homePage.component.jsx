import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homePage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory></Directory>
        </div>
    </div>
)
export default HomePage