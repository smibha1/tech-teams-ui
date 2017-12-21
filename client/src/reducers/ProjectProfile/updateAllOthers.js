export default function (state = {
  location: 'Los Angeles, CA',
  description: 'FUCKKKKK THIS SHITTTT',
}, action) {
  switch (action.type) {
    case 'UPDATE_ALL_OTHER_PROJECT_INFO':
      return action.payload;
  }
  return state;
}
