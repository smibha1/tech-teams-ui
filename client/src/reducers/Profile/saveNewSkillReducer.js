export default function (state = [], action) {
  switch (action.type) {
    case 'SAVE_NEW_TECH_SKILL':
      return action.payload;
  }
  return state;
}
