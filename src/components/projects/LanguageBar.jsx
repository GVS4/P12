import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LanguageBar.scss";

const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
};

// LanguageBar component to display languages usage in a project
const LanguageBar = ({ languages }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    color: "",
    x: 0,
    y: 0,
  });

  // Calculate the total bytes for all languages
  const total = Object.values(languages).reduce((sum, value) => sum + value, 0);

  // Handle mouse over event to show tooltip
  const handleMouseOver = (event, lang, percentage) => {
    const rect = event.target.getBoundingClientRect();
    // Update tooltip state with information of the hovered language
    setTooltip({
      visible: true,
      text: `${lang} (${percentage}%)`,
      color: languageColors[lang] || "#000",
      x: rect.left + rect.width / 2,
      y: rect.top - 1,
    });
  };

  // Handle mouse out event to hide tooltip
  const handleMouseOut = () => {
    // Hide the tooltip by updating the state
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="language-bar-container">
      {/* languageBar */}
      <div className="language-bar">
        {Object.entries(languages).map(([lang, bytes], index) => {
          const percentage = Math.round((bytes / total) * 100);
          return (
            <div
              key={index}
              className="language-bar-segment"
              style={{
                width: `${percentage}%`, // Width proportional to percentage
                backgroundColor: languageColors[lang] || "#000", // Segment background color
                cursor: 'pointer'
              }}
              onMouseOver={(e) => handleMouseOver(e, lang, percentage)} // Handle mouse over
              onMouseOut={handleMouseOut} // Handle mouse out
            />
          );
        })}
      </div>
      {/* tooltip */}
      {tooltip.visible && (
        <div
          className="language-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y, 
            backgroundColor: tooltip.color,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

LanguageBar.propTypes = {
  languages: PropTypes.object.isRequired,
};

export default LanguageBar;
