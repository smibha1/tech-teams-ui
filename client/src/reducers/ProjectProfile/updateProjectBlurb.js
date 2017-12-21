export default function (state = 'REDUX ROCKS', action) {
  switch (action.type) {
    case 'UPDATE_PROJECT_BLURB':
      return action.payload;
  }
  return state;
}
