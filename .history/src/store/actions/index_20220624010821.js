import axios from "axios";
import { LOAD_IMAGES } from "../types";

export const loadUsers = () => async (dispatch) => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const { data: allImages } = await axios.get(apiUrl);
    dispatch({ type: LOAD_IMAGES, payload: allImages });
  } catch (err) {
    console.error(err);
  }
};
