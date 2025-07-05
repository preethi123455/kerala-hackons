// client/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    orgType: '',
    userType: 'donor'
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/signup', form);
      alert(res.data.message);
      form.userType === 'donor' ? navigate('/login') : navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Your Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="orgType"
          placeholder="Organization Type"
          value={form.orgType}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="donor"
              checked={form.userType === 'donor'}
              onChange={handleChange}
            />
            Donor
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="receiver"
              checked={form.userType === 'receiver'}
              onChange={handleChange}
            />
            Receiver
          </label>
        </div>

        <button type="submit" style={styles.button}>Sign Up</button>
        <p style={styles.linkText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
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
    fontSize: '28px',
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
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '10px'
  },
  radioLabel: {
    fontSize: '16px',
    color: '#333'
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
    fontSize: '14px'
  },
  link: {
    color: '#ff6600',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Signup;
