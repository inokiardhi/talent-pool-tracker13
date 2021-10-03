import { GET_GAMEDETAIL_BEGIN, GET_GAMEDETAIL_SUCCESS, GET_GAMEDETAIL_FAIL } from "../type";
  
  const initialState = {
    gameDetail: [],
    loading: false,
    error: null,
  };
  
  const gameDetails = (state = initialState, action) => {
      const { type, payload, error } = action;
      switch (type) {
          case GET_GAMEDETAIL_BEGIN:
              return {
                  ...state,
                  loading: true,
              };
          case GET_GAMEDETAIL_SUCCESS:
              return {
                  ...state,
                  gameDetail: payload,
                  loading: false,
                  error: null,
              };
          case GET_GAMEDETAIL_FAIL:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default gameDetails;