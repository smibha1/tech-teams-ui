export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_AVAILABILITY':
      return action.payload;
  }
  return state;
}