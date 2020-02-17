import { handleActions } from "../util";

const initialState = {
  count: 10
}

const reducers = {
  add: (state, action) => {
    state.count++
  },
  minus: (state, action) => {
    state.count--
  },
}

export default (state = initialState, action) => handleActions({
  namespace: 'counter',
  state,
  action,
  reducers,
})

