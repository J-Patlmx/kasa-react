import { useState } from 'react';
// Définir le composant Rating
const Rating = ({ note }) => {
  
  // Utiliser le hook useState pour initialiser l'état de filledStars à la note arrondie
  const [filledStars] = useState(Math.floor(note));

    // Calculer le nombre d'étoiles restantes à remplir
  const remainingStars = 5 - filledStars;

  return (
    <div className="rating">
      {/* Afficher les étoiles pleines avec une couleur personnalisée */}
      {[...Array(filledStars)].map((_, i) => (
        <i key={i} className="fas fa-star" style={{ color: "#ff6060" }}></i>
      ))}
        {/* Afficher les étoiles vides */}
      {[...Array(remainingStars)].map((_, i) => (
        <i key={i + filledStars} className="far fa-star"></i>
      ))}
    </div>
  );
};

export default Rating;
