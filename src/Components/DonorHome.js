// DonorHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import ChatbotIcon from './ChatbotIcon';

const DonorHome = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Nourish Aid</h1>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/donate">Donate Food</Link>
          <Link style={styles.link} to="/blogs">Blogs</Link>
          <Link style={styles.link} to="/about">About Us</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.carousel}>
          <img
            src="https://images.unsplash.com/photo-1600718372243-64f45f6e8b06"
            alt="food1"
            style={styles.carouselImg}
          />
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="food2"
            style={styles.carouselImg}
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food3"
            style={styles.carouselImg}
          />
        </div>
        <h2 style={styles.tagline}>Make a Difference Today by Donating Your Surplus</h2>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.card}>
          <h3>Why Donate?</h3>
          <p>Help reduce food waste and feed the hungry. Your surplus can save lives and bring smiles.</p>
        </div>
        <div style={styles.card}>
          <h3>Recent Blogs</h3>
          <ul>
            <li><Link to="/blogs" style={styles.blogLink}>Top 5 Ways to Minimize Kitchen Waste</Link></li>
            <li><Link to="/blogs" style={styles.blogLink}>Impact Stories: From Plate to Purpose</Link></li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3>Contact Us</h3>
          <p>Email: nourishaid@support.com</p>
          <p>Phone: +91 98765 43210</p>
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
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '10px',
    scrollSnapType: 'x mandatory'
  },
  carouselImg: {
    width: '300px',
    height: '200px',
    borderRadius: '12px',
    objectFit: 'cover',
    scrollSnapAlign: 'center'
  },
  tagline: { marginTop: '25px', fontSize: '24px', color: '#333' },

  contentSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9'
  },
  card: {
    flex: '1 1 300px',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)'
  },
  blogLink: {
    color: '#ff6600',
    textDecoration: 'none'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ff6600',
    color: '#fff'
  }
};

export default DonorHome;
