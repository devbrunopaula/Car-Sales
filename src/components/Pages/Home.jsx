import React from 'react';
import Header from '../Header';
import AddedFeatures from '../AddedFeatures';
import AdditionalFeatures from '../AdditionalFeatures';
import Total from '../Total';

const Home = () => {


    return (
        <div className="boxes">
            <div className="box">
                <Header />
                <AddedFeatures />
            </div>
            <div className="box">
                <AdditionalFeatures />
                <Total />
            </div>
        </div>
    );
};

export default Home;
