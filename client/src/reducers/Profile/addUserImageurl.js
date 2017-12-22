export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_IMAGEURL':
      return action.payload;
  }
  return state;
}