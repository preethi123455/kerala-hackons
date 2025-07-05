// client/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      alert(res.data.message);
      res.data.userType === 'donor'
        ? navigate('/donor-home')
        : navigate('/receiver-home');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to Nourish Aid</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        <p style={styles.linkText}>
          Don’t have an account? <Link to="/" style={styles.link}>Signup</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '60px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(255, 165, 0, 0.2)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center'
  },
  title: {
    color: '#ff6600',
    fontSize: '26px',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid orange'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  },
  linkText: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#444'
  },
  link: {
    color: '#ff6600',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Login;
