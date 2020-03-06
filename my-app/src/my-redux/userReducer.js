export function userReducer(state, action) {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        user: {
          ...user,
          name: action.payload
        }
      }
    default:
      return state
  }
}
