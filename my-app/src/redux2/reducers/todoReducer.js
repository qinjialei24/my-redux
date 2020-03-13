
const initialState = {
  list: []
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        list: state.list.concat(action.payload)
      }
    default:
      return state
  }
}
