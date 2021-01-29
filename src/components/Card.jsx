import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './card.css';
import timerIcon from './timer.svg';
import distanceIcon from './distance.svg';
import playlistIcon from './playlist.svg';

const Card = (props) => {
    const [isHovered, setIsHovered] = useState(null);
    const { id, coverImg, title, avatar, time, distance, isActive, workoutCount, onClick } = props;

    const wrapperClasses = classNames({
        'card-wrapper': true,
        'card-wrapper__active': isHovered || isActive,
    });
    const viewDetails = isActive ? <div className="description__detail">View Details</div> : null;
    const stats =
        workoutCount === 1 ? (
            <div className="flex aic description__stats">
                <img src={timerIcon} className="description__icon" />
                <span className="description__text">{time}</span>
                <img src={distanceIcon} className="description__icon" />
                <span className="description__text">{distance}</span>
            </div>
        ) : null;
    const playlist =
        workoutCount > 1 ? (
            <div className="cover-image__playlist flex aic center">
                <div className="cover-image__playlist-group">
                    <div className="cover-image__playlist-count">{workoutCount}</div>
                    <div className="cover-image__playlist-text">Workouts</div>
                    <img src={playlistIcon} className="cover-image__playlist-icon" />
                </div>
            </div>
        ) : null;

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(id)}
        >
            <div className="cover-image" style={{ backgroundImage: `url("${coverImg}")` }}>
                {playlist}
            </div>
            <div className="flex between description">
                <div>
                    <div className="description__header">{title}</div>
                    {stats}
                    {viewDetails}
                </div>
                <div className="description__avatar" style={{ backgroundImage: `url('${avatar}')` }} />
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string,
    distance: PropTypes.string,
    workoutCount: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

Card.sampleProps = {
    id: 'cat',
    coverImg: 'https://placekitten.com/640/360',
    title: 'Slow Pulls and Fast Intervals',
    avatar: 'https://placekitten.com/640/360',
    time: '44:13',
    distance: '9,948 M',
    workoutCount: 12,
    isActive: false,
    onClick: () => {},
};

export default Card;
