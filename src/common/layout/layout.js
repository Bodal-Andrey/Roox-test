import React from 'react';
import Sort from '../sort';

const Layout = ({ children }) => {
    return (
        <main className='main'>
            <h1 className='visually-hidden'>Roox Test</h1>
            <div className='container'>
                <div className='container-wrapper'>
                    <Sort />
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;
