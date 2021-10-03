import { GET_GAMELIST_BEGIN, CLEAR } from "../type";

export const getGameList = (page = 1) => {
  return {
    type: GET_GAMELIST_BEGIN,
    page,
  };
};

export const clearList = () => {
  return {
    type: CLEAR,
  };
};





