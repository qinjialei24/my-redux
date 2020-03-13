export const time = store => dispatch => action => {
  console.log(new Date().getDate(), 'time');
  dispatch(action)
}