import { GET_BYGENRE_BEGIN } from "../type";

export const getGameByGenre = (page, genres) => {
    return {
      type: GET_BYGENRE_BEGIN,
      genres,
      page,
    };
  };