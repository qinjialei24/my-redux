export const log = store => dispatch => action => {
  console.log(action, 'action');
  dispatch(action)
}