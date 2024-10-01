import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/actionTypes";

const initialState = {
  favorites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const isFavorite = state.favorites.some((fav) => fav._id === action.payload._id);
      console.log(state.favorites);
      return {
        ...state,
        favorites: isFavorite ? state.favorites : [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((company) => company !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;
