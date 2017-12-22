export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_PROJECT_TEAM':
      return action.payload;
  }
  return state;
}
