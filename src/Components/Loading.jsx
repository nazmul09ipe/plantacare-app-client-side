import React from 'react';

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white'>
      <span className="loading loading-bars loading-lg sm:loading-xl text-cyan-800"></span>
    </div>
    );
};

export default Loading;