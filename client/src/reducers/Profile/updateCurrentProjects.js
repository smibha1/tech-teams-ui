export default function (state = [{
    projName: 'Cat Hoarders United',
    projRole: 'Dev',
    projDesc: 'Let\'s get all the cats together!',
  }], action) {
  switch (action.type) {
    case 'UPDATE_PROF_CURRENT_PROJECTS':
      return action.payload;
  }
  return state;
}
