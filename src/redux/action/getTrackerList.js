import { GET_TRACKER_, CLEAR, DEL_TRACKER_ } from "../type";

export const getTrackerList = () => {
  // console.log("ini action")
  return {
    type: `${GET_TRACKER_}BEGIN`,
  };
};

export const delTrackerList = (id) => {
  return {
    type: `${DEL_TRACKER_}BEGIN`,
    id,
  };
};

export const clearList = () => {
  return {
    type: CLEAR,
  };
};





