export default function (state = {
  devName: 'User not found.',
  devPicture: 'https://vignette.wikia.nocookie.net/phobia/images/e/e0/Red-Question-Mark.jpg/revision/latest?cb=20171108063335',
  devPosition: 'No Position Listed',
  devLocation: 'Los Angeles, CA',
  devDesc: 'Sorry, we couldn\'t find your information!',
}, action) {
  switch (action.type) {
    case 'UPDATE_PROF_DEV_INFO':
      return action.payload;
  }
  return state;
}
