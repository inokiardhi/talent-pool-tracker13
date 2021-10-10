import { POST_TRACKER_, UPDATE_TRACKER_ } from "../type";

export const postTracker = (data) => {
  return {
    type: `${POST_TRACKER_}BEGIN`,
    data,
  };
};

export const updateTracker = (data, id) => {
  return {
    type: `${UPDATE_TRACKER_}BEGIN`,
    data,
    id,
  };
};