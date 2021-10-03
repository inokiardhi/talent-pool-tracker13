import { GET_GAMELIST_BEGIN, GET_GAMELIST_SUCCESS, GET_GAMELIST_FAIL, CLEAR } from "../type";
import { GET_BYGENRE_BEGIN, GET_BYGENRE_SUCCESS, GET_BYGENRE_FAIL } from "../type";
import { GET_SEARCH_BEGIN, GET_SEARCH_SUCCESS, GET_SEARCH_FAIL } from "../type";
 
const initialState = {
    listGame: [],
    loading: false,
    error: null,
  };
  
  const games = (state = initialState, action) => {
      const { type, payload, error } = action;
      switch (type) {
          case GET_GAMELIST_BEGIN:
              return {
                  ...state,
                  loading: true,
              };
          case GET_GAMELIST_SUCCESS:
              return {
                  ...state,
                  listGame: payload,
                  loading: false,
                  error: null,
              };
          case GET_GAMELIST_FAIL:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };

          case GET_BYGENRE_BEGIN:
              return {
                  ...state,
                  loading: true,
              };
          case GET_BYGENRE_SUCCESS:
              return {
                  ...state,
                  listGame: payload,
                  loading: false,
                  error: null,
              };
          case GET_BYGENRE_FAIL:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };

            case GET_SEARCH_BEGIN:
                return {
                    ...state,
                    loading: true,
                };
            case GET_SEARCH_SUCCESS:
                return {
                    ...state,
                    listGame: payload,
                    loading: false,
                    error: null,
                };
            case GET_SEARCH_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: error,
                };

           case CLEAR:
              return {
                  ...state,
                  listGame: [],
                  loading: false,
                  error: null,
            };
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default games;