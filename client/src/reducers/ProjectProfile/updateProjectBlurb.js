export default function (state = 'this should disappear', action) {
  switch (action.type) {
    case 'UPDATE_PROJECT_BLURB':
      return action.payload;
  }
  return state;
}
