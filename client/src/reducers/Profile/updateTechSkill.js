export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PROF_TECH_SKILL':
      var newState = state.slice();
      newState.push(action.payload)
      console.log('neastea', newState)
      return newState;
    case 'DELETE_PROF_TECH_SKILL':
      return state.filter((c) => c !== action.payload);
    default:
      return state;
  }
  return state;
}
