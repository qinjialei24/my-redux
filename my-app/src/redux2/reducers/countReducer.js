const initialState = {
  number: 0
}

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'addCount':
      return {
        ...state,
        number: state.number + 1
      }
    default:
      return state
  }
}
