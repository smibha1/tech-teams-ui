export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_PROF_TECH_SKILL':
      return action.payload;
  }
  return state;
}
