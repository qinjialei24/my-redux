import { handleActions } from "../util";

const initialState = {
  inputValue: '',
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

export default (state = initialState, action) => handleActions({ state, action, reducers })


// export default (state = state, action) => {
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