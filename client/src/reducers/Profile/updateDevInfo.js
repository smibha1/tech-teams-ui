export default function (state = {
  name: 'Shaniqua Anastasia',
  imageurl: 'https://png.icons8.com/metro/540/edit-user-male.png',
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
