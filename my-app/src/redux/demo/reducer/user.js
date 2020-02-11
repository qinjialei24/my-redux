export function userReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    case 'decrease':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

