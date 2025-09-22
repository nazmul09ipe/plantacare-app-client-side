import * as React from 'react';

function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#007200] to-emerald-300 px-4">
      
      <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-extrabold text-red-700 leading-none">
        404
      </h1>
      
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-red-600 secondary-font mt-4 text-center">
        Page Not Found
      </h2>
      
      <p className="mt-6 text-white text-base sm:text-lg md:text-xl text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Error;
