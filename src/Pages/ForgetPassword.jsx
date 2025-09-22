// @flow strict
import * as React from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router'; 
import app from './../Firebase/Firebase.config';



function ForgetPassword() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const passedEmail = location.state?.email || '';
  const [email, setEmail] = useState(passedEmail);

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset password link sent! Check your email.");
        navigate("/auth/login"); 
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-gray-300 shadow-lg rounded-3xl p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-800 text-center mb-6">
          Reset Your Password
        </h1>

        <form
          onSubmit={handleForgetPassword}
          className="flex flex-col items-center space-y-4"
        >
          <label htmlFor="email" className="text-sm sm:text-base font-medium">
            Email
          </label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-[400px] h-12 border-2 border-cyan-950 rounded-3xl px-5 text-center text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            className="w-48 h-12 bg-cyan-950 text-white rounded-3xl hover:bg-blue-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
