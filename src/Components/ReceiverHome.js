// ReceiverHome.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatbotIcon from './ChatbotIcon';
import { Link } from 'react-router-dom';

const ReceiverHome = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get('http://localhost:6000/available-food');
      setFoodList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Nourish Aid</h1>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/receiver-home">Home</Link>
          <Link style={styles.link} to="/blogs">Blogs</Link>
          <Link style={styles.link} to="/about">About Us</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1543353071-087092ec393f"
          alt="receiver hero"
          style={styles.heroImg}
        />
        <h2 style={styles.tagline}>Claim Fresh Surplus Food from Trusted Donors</h2>
      </section>

      <section style={styles.foodSection}>
        <h2 style={styles.sectionTitle}>Available Food Donations</h2>
        <div style={styles.grid}>
          {foodList.map(food => (
            <div key={food.id} style={styles.card}>
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p><strong>Expires In:</strong> {food.expiry} hrs</p>
              <p><strong>Donor:</strong> {food.donor}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Nourish Aid. All rights reserved.</p>
      </footer>

      <ChatbotIcon />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: { margin: 0, fontSize: '24px' },
  nav: { display: 'flex', gap: '20px' },
  link: { color: '#fff', textDecoration: 'none', fontWeight: 'bold' },

  hero: { textAlign: 'center', padding: '30px 20px' },
  heroImg: {
    width: '80%',
    maxHeight: '300px',
    borderRadius: '12px',
    objectFit: 'cover'
  },
  tagline: { marginTop: '25px', fontSize: '24px', color: '#333' },

  foodSection: {
    padding: '40px 20px'
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#ff6600',
    marginBottom: '30px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ff6600',
    color: '#fff'
  }
};

export default ReceiverHome;
