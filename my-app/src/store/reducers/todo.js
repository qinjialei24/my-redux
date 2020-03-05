const initialState = {
  list: []
}

function todoReducer(state = initialState, action) {
  console.log("todoReducer -> action", action)
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        list: state.list.concat([action.payload])
      }
    default:
      return state
  }
}

export default todoReducer