import React, { useState } from 'react';
import PeriodCard from './components/PeriodCard';
import ProfileCard from './components/ProfileCard';
import data from './data.json';
import './sass/index.scss';

function App() {
  const [period, setPeriod] = useState('weekly');

  return (
    <main className="App">
      <div className="container">
        <ProfileCard period={period} setPeriod={setPeriod} />
        {data.map(({ title, timeframes }) => (
          <PeriodCard key={title} title={title} timeframes={timeframes[period]} />
        ))}
      </div>
    </main>
  );
}

export default App;
