export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_NAME':
    state= {name: action.payload}
      return action.payload;
  }
  return state;
}