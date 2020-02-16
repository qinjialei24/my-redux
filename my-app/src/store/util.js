const getKey = (str, flag) => {
  const i = str.indexOf(flag)
  return str.substring(i + 1, str.length + 1)
}

// export function handleActions({ state, action, reducers, namespace = '' }) {
//   return Object.keys(reducers)
//     .map(key => namespace + '/' + key)
//     .includes(action.type)
//     ? reducers[getKey(action.type, '/')](state, action)
//     : state
// }

export const handleActions = ({ state, action, reducers, namespace = '' }) =>
  Object.keys(reducers)
    .map(key => namespace + '/' + key)
    .includes(action.type)
    ? reducers[getKey(action.type, '/')](state, action)
    : state