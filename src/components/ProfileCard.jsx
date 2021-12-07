import React from 'react';
import PropTypes from 'prop-types';

function ProfileCard({ period, setPeriod }) {
  return (
    <section className="profile-card">
      <div className="profile-header">
        <img className="profile-icon" src="images/image-jeremy.png" alt="Jeremy" />
        <div className="profile-name">
          <span className="report">Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-periods">
        <div>
          <input
            type="radio"
            name="period"
            id="daily"
            value="daily"
            checked={period === 'daily'}
            onChange={({ target }) => setPeriod(target.value)}
          />
          <label htmlFor="daily">Daily</label>
        </div>
        <div>
          <input
            type="radio"
            name="period"
            id="weekly"
            value="weekly"
            checked={period === 'weekly'}
            onChange={({ target }) => setPeriod(target.value)}
          />
          <label htmlFor="weekly">Weekly</label>
        </div>
        <div>
          <input
            type="radio"
            name="period"
            id="monthly"
            value="monthly"
            checked={period === 'monthly'}
            onChange={({ target }) => setPeriod(target.value)}
          />
          <label htmlFor="monthly">Monthly</label>
        </div>
      </div>
    </section>
  );
}

ProfileCard.propTypes = {
  period: PropTypes.string.isRequired,
  setPeriod: PropTypes.func.isRequired,
};

export default ProfileCard;
