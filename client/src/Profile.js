import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || {};

  if (!profile) {
    return (
      <div>
        <p>No profile data available.</p>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  // Function to handle the payment button click
  const handleGetFollowersClick = (followers, price) => {
    // Navigate to the payment page and pass followers and price as state
    navigate('/payment', { state: { followers, price } });
  };

  return (
    <div className="profile-details">
      
      <div className="container">
      <h2>Profile Details</h2>
        <img 
          src={profile.profileImage} 
          alt={`${profile.fullName}'s Profile`} 
          className="profile-image" 
        />
        <div className="profile-info">
          <p className="username"><strong>Username:</strong> {profile.fullName}</p>
          <p className="followers"><strong>Followers:</strong> {profile.followers}</p>
        </div>
      </div>
      <div className="container">
        <h2>Instagram Followers Plans</h2>

        <div className="plan-card">
          <p className="followers">Followers: 1k <span>🔥</span></p>
          <p className="price">Price: ₹90</p>
          <p className="details">Old & Real: 1-3 years old</p>
          <p className="details">Time: UltraFast</p>
          <p className="details">Drop Rate: 0% No Drop</p>
          <button className="btn" onClick={() => handleGetFollowersClick(1000, 90)}>
            Get Followers Now
          </button>
        </div>

        <div className="plan-card">
          <p className="followers">Followers: 5k <span>🔥</span></p>
          <p className="price">Price: ₹150</p>
          <p className="details">Old & Real: 1-3 years old</p>
          <p className="details">Time: UltraFast</p>
          <p className="details">Drop Rate: 0% No Drop</p>
          <button className="btn" onClick={() => handleGetFollowersClick(5000, 150)}>
            Get Followers Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
