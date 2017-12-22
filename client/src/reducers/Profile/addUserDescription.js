export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_DESCRIPTION':
    state= {description: action.payload}
      return action.payload;
  }
  return state;
}