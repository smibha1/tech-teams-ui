export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_BASIC_PROFILE':
      return action.payload;
  }
  return state;
}
