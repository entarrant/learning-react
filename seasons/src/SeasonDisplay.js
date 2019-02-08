import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    displayText: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    displayText: "Brrr it's chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Within March and August
    return lat > 0 ? "summer" : "winter";
  } else {
    // Within September and February
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { displayText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{displayText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
