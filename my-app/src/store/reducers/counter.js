import { handleActions } from "../util";
const initialState = {
  count: 10
}

const reducers = {
  addCount: (state, action) => {
    return {
      count: state.count + 1
    }
  },
  minusCount: (state, action) => {
    return {
      count: state.count - 1
    }
  },
}

export default (state = initialState, action) => handleActions({ state, action, reducers })

