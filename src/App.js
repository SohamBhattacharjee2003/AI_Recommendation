import React, { useState } from "react";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The best offer <span className="text-blue-600">for your business</span>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti
            aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        <div className="flex-1 p-10 bg-white">
          <form className="space-y-4">
            {isSignUp && (
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
            )}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            {isSignUp && (
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Subscribe to our newsletter
              </label>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              {isSignUp ? "SIGN UP" : "LOG IN"}
            </button>
            <p className="text-center text-sm text-gray-500">or sign up with:</p>
            <div className="flex justify-center space-x-4 text-blue-600 text-xl">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-google"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-github"></i>
            </div>
            <p className="text-center mt-4 text-sm">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 font-semibold"
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
