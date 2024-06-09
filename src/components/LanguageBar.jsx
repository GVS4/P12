import React, { useState } from "react";
import PropTypes from "prop-types";

const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
};

const LanguageBar = ({ languages }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    color: "",
    x: 0,
    y: 0,
  });

  // Calcul du total des bytes pour tous les langages
  const total = Object.values(languages).reduce((sum, value) => sum + value, 0);

  // Gestion du survol de la souris sur un segment de la barre de langage
  const handleMouseOver = (event, lang, percentage) => {
    const rect = event.target.getBoundingClientRect();
    // Mise à jour de l'état du tooltip avec les informations du langage survolé
    setTooltip({
      visible: true,
      text: `${lang} (${percentage}%)`,
      color: languageColors[lang] || "#000",
      x: rect.left + rect.width / 2,
      y: rect.top - 1,
    });
  };

  // Gestion de la sortie de la souris d'un segment de la barre de langage
  const handleMouseOut = () => {
    // Masquer le tooltip en mettant à jour l'état
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
                width: `${percentage}%`, // Largeur proportionnelle au pourcentage
                backgroundColor: languageColors[lang] || "#000", // Couleur de fond du segment
              }}
              onMouseOver={(e) => handleMouseOver(e, lang, percentage)} // Gestionnaire de survol
              onMouseOut={handleMouseOut} // Gestionnaire de sortie
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
