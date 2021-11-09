import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// Has the job to provide the context
// to all components that are interested in listening to the values
export const FavoritesContextProvider = (props) => {
  // here the data can be managed
  const [userFavorites, setUserFavorites] = useState();
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => meetupId !== meetup.id);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  // enables to wrap component with the context
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
