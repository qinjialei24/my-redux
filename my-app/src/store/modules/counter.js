import { handleActions } from "../util";

const initialState = {
  count: 10
}

const reducers = {
  add: (state, action) => {
    return {
      count: state.count + 1
    }
  },
  minus: (state, action) => {
    return {
      count: state.count - 1
    }
  },
}

export default (state = initialState, action) => handleActions({
  namespace: 'counter',
  state,
  action,
  reducers,
})

