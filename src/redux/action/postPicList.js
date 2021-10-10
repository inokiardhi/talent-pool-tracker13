import { POST_PIC_, UPDATE_PIC_ } from "../type";

export const postPic = (data) => {
  return {
    type: `${POST_PIC_}BEGIN`,
    data,
  };
};

export const updatePic = (data, id) => {
  return {
    type: `${UPDATE_PIC_}BEGIN`,
    data,
    id,
  };
};