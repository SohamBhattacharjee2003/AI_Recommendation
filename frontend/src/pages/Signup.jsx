import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSocialSignup = (provider) => {
    setLoading(true);
    console.log(`Signing up with ${provider}`);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The best offer <span className="text-blue-600">for your business</span>
          </h1>
          <p className="text-gray-500">
            Create an account to start managing your business with our powerful tools.
          </p>
        </div>
        <div className="flex-1 p-10 bg-white">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="absolute right-0 top-full mt-1 text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot Password?
              </button>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Subscribe to our newsletter
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "SIGN UP"}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleSocialSignup('google')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup('linkedin')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup('github')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <img src="https://www.svgrepo.com/show/439171/github.svg" alt="GitHub" className="h-5 w-5" />
              </button>
            </div>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}