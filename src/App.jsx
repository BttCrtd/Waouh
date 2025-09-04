import './App.css';
import { useState } from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import Card10 from './components/Card10';
import Card11 from './components/Card11';

function App() {
  const cards = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card4 />,
    <Card5 />,
    <Card6 />,
    <Card7 />,
    <Card8 />,
    <Card9 />,
    <Card10 />,
    <Card11 />,
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="containerCard">
      <button onClick={handlePrev} disabled={index === 0}>
        👈️
      </button>
      {cards[index]}

      <button onClick={handleNext} disabled={index === cards.length - 1}>
        👉️
      </button>
    </div>
  );
}

export default App;
