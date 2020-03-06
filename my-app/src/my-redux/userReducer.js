const initialState = {
  name: ''
}


export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
