import { LOAD_IMAGES } from "../types";

const initialState = {
  allImages: [],
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return { ...state, allComments: action.payload };
    default:
      return state;
  }
};
