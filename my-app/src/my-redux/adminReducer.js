const initialState = {
  name: ''
}

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case 'setAdminName':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
