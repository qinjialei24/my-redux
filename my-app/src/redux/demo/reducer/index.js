import { adminReducer } from "./admin.js";
import { userReducer } from "./user.js";

import combineReducers from "../../core/combineReducers.js";

export const reducers = combineReducers({
  admin: adminReducer,
  user: userReducer,
})