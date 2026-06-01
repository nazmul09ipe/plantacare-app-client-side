import React from 'react';
import PrivateRoute from './PrivateRoute';
import MyPlants from './MyPlants';

const MyPlantsWrapper = () => {
    return (
        <div>
            <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
        </div>
    );
};

export default MyPlantsWrapper;