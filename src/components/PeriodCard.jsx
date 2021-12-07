import React from 'react';
import PropTypes from 'prop-types';

function PeriodCard({ title, timeframes: { current, previous } }) {
  return (
    <section className="period-card">
      <div className="period-content">
        <div className="period-sub-container">
          <h2 className="period-title">{title}</h2>
          <img className="ellipsis" src="images/icon-ellipsis.svg" alt="Ellipsis" />
        </div>
        <div className="period-sub-container">
          <span className="time-current">{`${current}hrs`}</span>
          <span className="time-previous">{`Last Week - ${previous}hrs`}</span>
        </div>
      </div>
    </section>
  );
}

PeriodCard.propTypes = {
  title: PropTypes.string.isRequired,
  timeframes: PropTypes.shape({
    current: PropTypes.number,
    previous: PropTypes.number,
  }).isRequired,
};

export default PeriodCard;
