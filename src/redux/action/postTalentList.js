import { POST_TALENT_, UPDATE_TALENT_ } from "../type";

export const postTalent = (data) => {
  return {
    type: `${POST_TALENT_}BEGIN`,
    data,
  };
};

export const updateTalent = (data, id) => {
  return {
    type: `${UPDATE_TALENT_}BEGIN`,
    data,
    id,
  };
};