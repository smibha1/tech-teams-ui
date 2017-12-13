export default function (state = {
  completedProjs: [
    {
      projName: 'Blue Dog',
      projRole: 'Dev',
      projDesc: 'Fetches services for you and yoru cat.',
    },
    {
      projName: 'Yummy',
      projRole: 'Dev',
      projDesc: 'Making food your friend.',
    },
  ],
}, action) {
  switch (action.type) {
    case 'UPDATE_PROF_COMPLETED_PROJECTS':
      return action.payload;
  }
  return state;
}
