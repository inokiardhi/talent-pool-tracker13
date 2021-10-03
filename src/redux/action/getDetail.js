import { GET_GAMEDETAIL_BEGIN } from "../type";

export const getGameDetail = (id) => {
  return {
    type: GET_GAMEDETAIL_BEGIN,
    id,
  };
};



