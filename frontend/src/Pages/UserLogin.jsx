import React from 'react';
import '../index.css';

const UserLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text transition-colors duration-300">
      <div className="bg-background p-8 rounded-lg shadow-lg border border-border w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">User Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-background" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-text text-sm font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-text mb-3 leading-tight focus:outline-none focus:shadow-outline bg-background" />
          </div>
          <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;