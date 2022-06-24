import axios from "axios";
import { LOAD_IMAGES } from "../types";

export const loadImages = () => async (dispatch) => {
  try {
    const apiUrl = "https://json-server-jupiter.herokuapp.com/images";
    const { data: allImages } = await axios.get(apiUrl);
    dispatch({ type: LOAD_IMAGES, payload: allImages });
    console.log(allImages);
  } catch (err) {
    console.error(err);
  }
};
