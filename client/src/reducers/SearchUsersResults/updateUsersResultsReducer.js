export default function (state = [
  {
    userImage: 'http://bit.ly/2Bpu43E',
    userName: 'Shaniqua Johnson',
    userTechStack: ['React', 'Node', 'Angular'],
    interview: false,
  },
  {
    userImage: 'http://bit.ly/2Bpu43E',
    userName: 'Darth Vader',
    userTechStack: ['Backbone', 'Python', 'Ubuntu'],
    interview: true,
  },
], action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_USERS_RESULTS':
      return action.payload;
  }
  return state;
}
