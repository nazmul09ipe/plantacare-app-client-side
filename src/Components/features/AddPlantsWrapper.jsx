import React from 'react';
import PrivateRoute from './PrivateRoute';
import AddPlants from './AddPlants';

const AddPlantsWrapper = () => {
    return (
        <div>
        <PrivateRoute><AddPlants></AddPlants></PrivateRoute>
        </div>
    );
};

export default AddPlantsWrapper;