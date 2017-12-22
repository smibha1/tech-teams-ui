export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_LOCATION':
      return action.payload;
  }
  return state;
}