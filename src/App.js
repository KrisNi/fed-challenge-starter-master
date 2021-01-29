import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';
import lakeInniscarraThumb from './images/lake-inniscarra-thumb.jpg';
import lakeInniscarraTrainer from './images/lake-inniscarra-trainer.jpg';
import performanceSeriesThumb from './images/performance-series-thumb.jpg';
import performanceSeriesTrainer from './images/performance-series-trainer.jpg';
import slowPullThumb from './images/slow-pulls-thumb.jpg';
import slowPullTrainer from './images/slow-pulls-trainer.jpg';
import minutesToTonedThumb from './images/20-minutes-to-toned-thumb.jpg';
import minutesToTonedTrainer from './images/20-minutes-to-toned-trainer.jpg';
import charlesRaceThumb from './images/charles-race-thumb.jpg';
import charlesRaceTrainer from './images/charles-race-trainer.jpg';
import fullBodyHiitThumb from './images/full-body-hiit-thumb.jpg';
import fullBodyHiitTrainer from './images/full-body-hiit-trainer.jpg';
import kafueRiverThumb from './images/kafue-river-thumb.jpg';
import kafueRiverTrainer from './images/kafue-river-trainer.jpg';
import shredAndBurnThumb from './images/shred-and-burn-thumb.jpg';
import shredAndBurnTrainer from './images/shred-and-burn-trainer.jpg';

const App = () => {
    const [activeCard, setActiveCard] = useState(null);
    return (
        <div className="App">
            <Card
                id="lake-inniscarra"
                coverImg={lakeInniscarraThumb}
                title="Lake Inniscarra, Ireland—Pyramid"
                avatar={lakeInniscarraTrainer}
                time="30:53"
                distance="6,248 M"
                workoutCount={1}
                onClick={setActiveCard}
                isActive={activeCard === 'lake-inniscarra'}
            />
            <Card
                id="performance-series"
                coverImg={performanceSeriesThumb}
                title="Performance Series"
                avatar={performanceSeriesTrainer}
                workoutCount={9}
                onClick={setActiveCard}
                isActive={activeCard === 'performance-series'}
            />
            <Card
                id="slow-pulls"
                coverImg={slowPullThumb}
                title="Slow Pulls and Fast Intervals"
                avatar={slowPullTrainer}
                time="44:13"
                distance="9,948 M"
                workoutCount={1}
                onClick={setActiveCard}
                isActive={activeCard === 'slow-pulls'}
            />
            <Card
                id="20-minutes-to-toned"
                coverImg={minutesToTonedThumb}
                title="20 Minutes to Toned"
                avatar={minutesToTonedTrainer}
                workoutCount={12}
                onClick={setActiveCard}
                isActive={activeCard === '20-minutes-to-toned'}
            />
            <Card
                id="charles-race"
                coverImg={charlesRaceThumb}
                title="Charles Race, Boston, Massachusetts"
                avatar={charlesRaceTrainer}
                time="36:22"
                distance="8,648 M"
                workoutCount={1}
                onClick={setActiveCard}
                isActive={activeCard === 'charles-race'}
            />
            <Card
                id="full-body-hiit-thumb"
                coverImg={fullBodyHiitThumb}
                title="Full-Body HIIT Series"
                avatar={fullBodyHiitTrainer}
                workoutCount={12}
                onClick={setActiveCard}
                isActive={activeCard === 'full-body-hiit-thumb'}
            />
            <Card
                id="kafue-river"
                coverImg={kafueRiverThumb}
                title="Kafue River, Zambia—Power Stroke Pyramid"
                avatar={kafueRiverTrainer}
                time="22:22"
                distance="4,660 M"
                workoutCount={1}
                onClick={setActiveCard}
                isActive={activeCard === 'kafue-river'}
            />
            <Card
                id="shred-and-burn"
                coverImg={shredAndBurnThumb}
                title="Shred & Burn Series"
                avatar={shredAndBurnTrainer}
                workoutCount={16}
                onClick={setActiveCard}
                isActive={activeCard === 'shred-and-burn'}
            />
        </div>
    );
};

export default App;
