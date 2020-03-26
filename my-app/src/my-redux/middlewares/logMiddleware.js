export const logMiddleware = store => dispatch => action => {
  console.log('last state :', store.getState());
  dispatch(action)
  console.log('next state :', store.getState());
}