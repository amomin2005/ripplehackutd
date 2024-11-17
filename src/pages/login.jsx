import React, { useState } from 'react';
import './Login.css'; // Import the Login.css file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (username === 'admin' && password === 'admin') {
        console.log('Login successful');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`submit-button ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;