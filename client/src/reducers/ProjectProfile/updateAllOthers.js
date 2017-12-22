export default function (state = {
  location: 'No Man\'s Land, CA',
  description: 'this should disappear',
  projectImage: 'http://bit.ly/2BhFySR',
}, action) {
  switch (action.type) {
    case 'UPDATE_ALL_OTHER_PROJECT_INFO':
      return action.payload;
  }
  return state;
}
