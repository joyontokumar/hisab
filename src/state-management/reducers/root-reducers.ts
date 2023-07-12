import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../reducers/cart";
import { products } from "./products";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products,
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
