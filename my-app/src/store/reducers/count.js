const initialState = {
  count: 0
}

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1
      }

    case 'minus':
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

export default countReducer