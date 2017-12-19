export default function (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_SIGNIN_INFO':
      return action.payload;
  }
  return state;
}
