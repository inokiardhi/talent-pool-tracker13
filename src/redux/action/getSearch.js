import { GET_SEARCH_BEGIN } from "../type";

export const getSearchList = (keyword) => {
    return {
      type: GET_SEARCH_BEGIN,
      keyword,
  };
};