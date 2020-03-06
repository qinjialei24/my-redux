export const timeMiddleware = store => dispatch => {
  return action => {
    console.log(new Date().getTime());
    dispatch(action)
  }
}