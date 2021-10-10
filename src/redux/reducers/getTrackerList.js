import { GET_TRACKER_, CLEAR, DEL_TRACKER_ } from "../type";
 
const initialState = {
    listTracker: [],
    loading: false,
    error: null,
  };
  
  const Trackers = (state = initialState, action) => {
      const { type, payload, error } = action;
    //   console.log("ini reducer")
      switch (type) {
          case `${GET_TRACKER_}BEGIN`:
              return {
                  ...state,
                  loading: true,
              };
          case `${GET_TRACKER_}SUCCESS`:
              return {
                  ...state,
                  listTracker: payload,
                  loading: false,
                  error: null,
              };
          case `${GET_TRACKER_}FAIL`:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };

          case `${DEL_TRACKER_}BEGIN` :
              return {
                  ...state,
                  loading : true,
            };
          case `${DEL_TRACKER_}SUCCESS` :
            return {
                  ...state,
                  loading : false,
                  error : null,
            };
          case `${DEL_TRACKER_}FAIL` :
            return {
                  ...state,
                  loading : false,
                  error : error,
            };

           case CLEAR:
              return {
                  ...state,
                  listTracker: [],
                  loading: false,
                  error: null,
            };
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default Trackers;