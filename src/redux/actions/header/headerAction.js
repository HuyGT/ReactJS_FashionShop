import { HeaderType } from "../../../common/types";

export const actHeader = (payload) => ({
  type: HeaderType.GET_HEIGHT,
  payload,
});
