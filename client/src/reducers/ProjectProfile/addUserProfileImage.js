export default function (state = [
  {
    userPicture: 'https://vignette.wikia.nocookie.net/harry-potter-mischief/images/a/a9/Paul-Rudd-3.jpg/revision/latest?cb=20160508222213',
  },
], action) {
  switch (action.type) {
    case 'ADD_USER_PROFILE_IMAGE':
      return action.payload;
  }
  return state;
}