export default function (state = {
  name: 'Shaniqua Anastasia',
  imageurl: 'http://bit.ly/2BZ5lT6',
  title: 'Developer',
  location: 'Los Angeles, CA',
  description: 'I love Agile and stuff!',
  availability: 'true',
}, action) {
  switch (action.type) {
    case 'UPDATE_PROF_DEV_INFO':
      return action.payload;
  }
  return state;
}
