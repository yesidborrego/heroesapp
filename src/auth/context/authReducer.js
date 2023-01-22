import { typesAuth } from "../type/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case typesAuth.login:
      return {
        ...state,
        logged: true,
        username: action.payload,
      };

    case typesAuth.logout:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
}