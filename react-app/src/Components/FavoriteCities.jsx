import React from 'react';

const FavoriteCities = ({ favorites, onRemove }) => {
  return (
    <div className="favorite-cities">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.city}
            <button onClick={() => onRemove(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
