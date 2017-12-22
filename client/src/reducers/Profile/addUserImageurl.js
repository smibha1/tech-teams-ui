export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_IMAGEURL':
    state= {imageurl: action.payload}
      return action.payload;
  }
  return state;
}