import { handleActions } from "../util";

const initialState = {
  inputValue: '123',
  list: []
}
const reducers = {
  add(state, action) {
    return {
      ...state,
      list: [...state.list, action.data]
    }
  },
  delete(state, action) {
    return {
      inputValue: state.inputValue,
      list: []
    }
  },
  changeInput(state, action) {
    return {
      ...state,
      inputValue: action.data,
    }
  }
}

export default (state = initialState, action) => handleActions({
  state,
  action,
  reducers,
  namespace: 'todo'
})

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         inputValue: state.inputValue,
//         list: [...state.list, action.data]
//       }

//     case 'delete':
//       return {
//         inputValue: state.inputValue,
//         list: []
//       }

//     case 'changeInput':
//       return {
//         inputValue: action.data,
//         list: state.list
//       }

//     default:
//       return state
//   }
// }