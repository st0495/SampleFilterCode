import { CREATE_BRAND, CREATE_CATEGORY, CREATE_ITEMS } from "./action";

const initialState = {
  categoryList: [],
  brandList: [],
  itemsList: [],
};

const DashBoardScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        categoryList: action.payload,
      };
    case CREATE_BRAND:
      return {
        ...state,
        brandList: action.payload,
      };
    case CREATE_ITEMS:
      return {
        ...state,
        itemsList: action.payload,
      };
    default:
      return state;
  }
};

export default DashBoardScreenReducer;
