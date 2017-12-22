export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_TITLE':
      return action.payload;
  }
  return state;
}