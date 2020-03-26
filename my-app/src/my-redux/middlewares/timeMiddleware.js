export const timeMiddleware = store => dispatch => action => {
  console.log(new Date().getTime());
  dispatch(action)
}