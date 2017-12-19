export default function (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_INFO':
      return action.payload;
  }
  return state;
}
