export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PROF_TECH_SKILL':
      let newState = state.slice();
      newState.push(action.payload)
      return newState;
    case 'DELETE_PROF_TECH_SKILL':
      return this.state.filter((c) => c !== action.payload);
    default:
      return state;
  }
  return state;
}
