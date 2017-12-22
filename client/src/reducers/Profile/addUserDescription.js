export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_DESCRIPTION':
      return action.payload;
  }
  return state;
}