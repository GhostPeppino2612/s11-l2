import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_JOBS,
  SET_LOADING,
  SET_ERROR,
} from "./actionTypes";

export const addFavorite = (company) => ({
  type: ADD_FAVORITE,
  payload: company,
});

export const removeFavorite = (company) => ({
  type: REMOVE_FAVORITE,
  payload: company,
});

export const fetchJobs = (query) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_ERROR, payload: null });

    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(`${baseEndpoint}${query}&limit=20`);
      if (!response.ok) throw new Error("Error fetching results");
      const { data } = await response.json();
      dispatch({ type: SET_JOBS, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};
