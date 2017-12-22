export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_AVAILABILITY':
    state= {availability: action.payload}
      return action.payload;
  }
  return state;
}