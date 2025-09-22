import * as React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/Logo.png';
import { toast } from 'react-toastify';

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Congratulations! You have successfully subscribed.");
  };

  return (
    <footer className="w-full bg-[#0ba867] text-white">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row flex-wrap justify-around items-start text-base font-light p-6 sm:p-8 gap-6 sm:gap-8">
        
       
        <div className="flex flex-col items-start gap-2">
          <img className="w-20 h-16" src={logo} alt="Logo" />
          <h1 className="text-base sm:text-lg font-bold primary-font text-black">PlantaCare</h1>
          <h2 className="font-medium text-[16px] sm:text-[18px] secondary-font">
            Plan Your Life With Plants
          </h2>
        </div>

     
        <div>
          <h1 className="text-base sm:text-lg font-bold mb-2 primary-font">IMPORTANT LINKS</h1>
          <nav className="flex flex-col gap-1 primary-font text-sm sm:text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allPlants">All Plants</NavLink>
            <NavLink to="/addPlantsWrapper">Add Plants</NavLink>
            <NavLink to="/myPlantsWrapper">My Plants</NavLink>
          </nav>
        </div>

       
        <div>
          <h1 className="text-base sm:text-lg font-bold mb-2 primary-font">LEGAL</h1>
          <nav className="flex flex-col gap-1 primary-font text-sm sm:text-base">
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms and Conditions</NavLink>
            <NavLink to="/faqs">Faqs</NavLink>
          </nav>
        </div>

       
        <form onSubmit={handleSubscribe} className="w-full md:w-auto mt-4 md:mt-0">
          <h1 className="font-bold mb-2 primary-font text-sm sm:text-base">NEWSLETTER</h1>
          <fieldset className="w-full">
            <label className="block mb-2 sm:mb-3 primary-font text-sm sm:text-base">Enter your email address</label>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered text-black flex-1 w-full sm:w-auto"
                required
              />
              <button type="submit" className="btn btn-primary primary-font w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>

  
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          <p className="text-[14px] sm:text-[16px] font-bold primary-font">CONTACT US :</p>
          <p className="text-white primary-font text-sm sm:text-base">plantacare@gmail.com</p>

          <p className="text-[14px] sm:text-[16px] font-bold primary-font">FOLLOW US :</p>
          <div className="flex justify-start items-center gap-3">
        
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.024-3.061-1.865-3.061-1.867 0-2.153 1.459-2.153 2.965v5.7h-3v-10h2.884v1.366h.041c.402-.762 1.384-1.566 2.848-1.566 3.045 0 3.606 2.004 3.606 4.611v5.589z" />
              </svg>
            </a>
        
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
        
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

   
      <div className="flex justify-center items-center p-4 bg-[#00401A] gap-2 text-white primary-font text-sm sm:text-base">
        <p>© {new Date().getFullYear()}, PlantaCare. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
