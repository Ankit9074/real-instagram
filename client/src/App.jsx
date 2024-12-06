import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Profile from './Profile';  
import Payment from './PaymentData';
import './App.css';

function Home() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:3000/scrape?username=${encodeURIComponent(username)}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      navigate('/profile', { state: { profile: data } }); // Pass profile data to Profile component
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="div">
     <div className="App">
      <form onSubmit={handleSubmit}>
        <h4>Your Instagram Profile URL or Username:</h4>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          required
        />
        <button type="submit" disabled={loading}>Get Followers</button>
      </form>
      {loading && <div className="loader">Loading...</div>}
      {error && <p className="error-message">{error}</p>}
    </div>
    <div class="image-container">
    <img src="./image/proof.jpg" alt="hero Image"/>
    <img src="./image/proof2.jpg" alt="Hero Image"/>
  </div>  
  <footer id="footer">
    <img src="https://growwave.online/instagram/images/google_pay_footer.webp" alt="Footer Image"/>
  </footer>
   </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
