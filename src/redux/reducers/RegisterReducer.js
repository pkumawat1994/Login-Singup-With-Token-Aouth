import { POST_REGISTER } from "../actions/types";

const initialState = {
  data: [],
};

const RegisterReducer = (state = initialState, action) => {
  console.log(555555, action.payload);
  // console.log(action);
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
};
export default RegisterReducer;
